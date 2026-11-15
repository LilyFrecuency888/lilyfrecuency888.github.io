/* Lily Frequency · candado de las zonas de miembros
   Va en el <head>, ANTES del script propio de cada pagina.
   Mientras no haya sesion activa y membresia al dia, bloquea la
   entrada automatica por codigo guardado. */
(function(){
  "use strict";
  var CLAVES = /^lf-(web|ter|man)-code$/;
  var pendiente = true;

  /* 1. Tapar el codigo guardado hasta saber quien entra */
  var _get = Storage.prototype.getItem;
  Storage.prototype.getItem = function(k){
    if (pendiente && CLAVES.test(k)) return null;
    return _get.call(this, k);
  };
  function destapar(){ pendiente = false; }

  var C  = window.LF_SUPABASE || {};
  var WA = window.LF_WA || "50234819870";
  var listo = C.url && C.url.indexOf("PEGAR") !== 0;

  /* Sin configurar todavia: se queda el codigo del mes como estaba */
  if (!listo) { destapar(); return; }

  var esc = function(s){ return String(s==null?"":s).replace(/[&<>"']/g, function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); };

  var mesActual = function(){ var d=new Date();
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0"); };
  var hoy = function(){ return new Date().toISOString().slice(0,10); };

  document.addEventListener("DOMContentLoaded", function(){ arrancar(); });

  function arrancar(){
    var gate = document.getElementById("gate");
    var area = document.getElementById("area");
    if (!gate) { destapar(); return; }

    Array.prototype.forEach.call(gate.querySelectorAll(".box"), function(b){ b.style.display="none"; });
    var caja = document.createElement("div");
    caja.className = "box";
    caja.id = "lf-puerta";
    gate.appendChild(caja);
    var pinta = function(h){ caja.innerHTML = h; };
    pinta('<p class="muted">Revisando tu acceso&hellip;</p>');

    function cerrar(){
      if (area) area.hidden = true;
      gate.hidden = false;
    }

    import("https://esm.sh/@supabase/supabase-js@2")
      .then(function(mod){
        var sb = mod.createClient(C.url, C.anon, {
          auth:{ persistSession:true, autoRefreshToken:true, storageKey:"lf-sesion" }
        });
        window.LF_SB = sb;
        return revisar(sb);
      })
      .catch(function(e){
        console.error(e);
        pinta('<p class="muted">No pude conectar con el servidor de miembros. '+
              'Revisa tu internet y recarga la p&aacute;gina.</p>');
      });

    function sinSesion(){
      cerrar();
      pinta(
        '<h2 style="margin-top:0">Zona de miembros</h2>'+
        '<p class="muted">Entra con tu cuenta para ver el contenido.</p>'+
        '<div class="row" style="margin-top:16px">'+
          '<a class="btn pri" href="registro.html?volver='+encodeURIComponent(location.pathname.replace(/^\//,""))+'">Entrar a mi cuenta</a>'+
          '<a class="btn" href="registro.html?nueva=1">Crear mi cuenta</a>'+
        '</div>'
      );
    }

    function pendienteDePago(sb, correo, m){
      cerrar();
      var vencida = m && m.activo && m.vence && m.vence < hoy();
      var titulo  = vencida ? "Tu membres&iacute;a venci&oacute;" : "Tu cuenta est&aacute; lista";
      var texto   = vencida
        ? "Se venci&oacute; el "+esc(m.vence)+". Renueva y la reactivo."
        : "Falta activarla. Cuando tengas tu pago hecho, av&iacute;same y la activo.";
      var msj = encodeURIComponent(
        (vencida ? "Hola, quiero renovar mi membresía. Mi correo es: " : "Hola, ya pagué mi membresía. Mi correo es: ") + correo);
      pinta(
        '<h2 style="margin-top:0">'+titulo+'</h2>'+
        '<p class="muted">'+texto+'</p>'+
        '<p class="small muted" style="margin-top:10px">Cuenta: <b>'+esc(correo)+'</b></p>'+
        '<div class="row" style="margin-top:16px">'+
          '<a class="btn pri" href="pagar.html">Ver los planes</a>'+
          '<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/'+WA+'?text='+msj+'">Avisarme por WhatsApp</a>'+
          '<button class="btn" id="lf-salir">Salir</button>'+
        '</div>'
      );
      var b = document.getElementById("lf-salir");
      if (b) b.onclick = function(){ sb.auth.signOut().then(function(){ location.reload(); }); };
    }

    function revisar(sb){
      return sb.auth.getSession().then(function(r){
        var ses = r && r.data && r.data.session;
        if (!ses) { sinSesion(); return; }
        var correo = ses.user.email || "";
        return sb.from("miembros")
          .select("activo,vence,plan,nombre")
          .eq("id", ses.user.id).maybeSingle()
          .then(function(q){
            var m = q.data;
            var alDia = m && m.activo && (!m.vence || m.vence >= hoy());
            if (!alDia) { pendienteDePago(sb, correo, m); return; }
            return abrir(sb, m, correo);
          });
      });
    }

    function abrir(sb, m, correo){
      return sb.from("llaves").select("codigo").eq("mes", mesActual()).maybeSingle()
        .then(function(q){
          var k = q.data;
          if (!k) {
            pinta('<p class="muted">Tu cuenta est&aacute; al d&iacute;a, pero falta cargar la llave de este mes. '+
                  '<a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">Av&iacute;same</a> y la subo.</p>');
            return;
          }
          destapar();
          var paso = window.enter;
          if (typeof paso !== "function") {
            pinta('<p class="muted">No encontr&eacute; el lector de esta zona. Recarga la p&aacute;gina.</p>');
            return;
          }
          return Promise.resolve(paso(k.codigo, true)).then(function(){
            if (area && area.hidden) {
              pinta('<p class="muted">No pude abrir el contenido de esta zona. Rec&aacute;rgala o av&iacute;same.</p>');
              return;
            }
            saludo(sb, m, correo);
          });
        });
    }

    function saludo(sb, m, correo){
      var salir = function(){
        sb.auth.signOut().then(function(){
          try{ ["lf-web-code","lf-ter-code","lf-man-code"].forEach(function(k){ localStorage.removeItem(k); }); }catch(e){}
          location.href = "registro.html";
        });
      };
      var viejo = document.getElementById("out");
      if (viejo) viejo.onclick = salir;

      if (!area || document.getElementById("lf-barra")) return;
      var d = document.createElement("div");
      d.id = "lf-barra";
      d.className = "small muted";
      d.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px";
      var quien = (m && m.nombre) ? m.nombre : correo;
      var hasta = (m && m.vence) ? (" &middot; hasta el "+esc(m.vence)) : "";
      var plan  = (m && m.plan) ? esc(m.plan) : "activa";
      d.innerHTML = '<span>&#10022; '+esc(quien)+' &middot; membres&iacute;a '+plan+hasta+'</span>'+
                    '<a href="#" id="lf-salir2" style="color:var(--lila2)">Salir</a>';
      area.insertBefore(d, area.firstChild);
      var a = document.getElementById("lf-salir2");
      if (a) a.onclick = function(e){ e.preventDefault(); salir(); };
    }
  }
})();
