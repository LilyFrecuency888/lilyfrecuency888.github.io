/* Lily Frequency · sección visible de terapeutas y clínicas
   Carga después de perfiles.js. Usa window.LilyT. */
(function(){
"use strict";
function boot(){
  var T=window.LilyT;
  if(!T||typeof store==="undefined"||typeof PROGRAMS==="undefined")return;
  var host=document.querySelector('[data-view="cuenta"]');
  if(!host)return;

  /* ---- niveles de licencia ---- */
  var NIV=[
    {n:11, t:"1 a 11 pacientes",  p:"USD 188"},
    {n:22, t:"12 a 22 pacientes", p:"USD 333"},
    {n:44, t:"23 a 44 pacientes", p:"USD 555"},
    {n:66, t:"45 a 66 pacientes", p:"USD 777"},
    {n:100,t:"67 a 100 pacientes",p:"USD 888"}
  ];
  var WA=(typeof CONFIG!=="undefined"&&CONFIG.whatsapp)||"";
  var waLink=function(msg){return "https://wa.me/"+WA+"?text="+encodeURIComponent(msg)};

  /* ---- estilos ---- */
  var st=document.createElement("style");
  st.textContent=[
   ".tcard{border:1px solid var(--menta);border-radius:18px;padding:16px;margin-top:14px;",
     "background:linear-gradient(135deg,rgba(143,240,208,.12),rgba(201,167,255,.08))}",
   ".tcard h3{font-size:1.05rem;margin-bottom:4px}",
   ".tcard .niv{display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid var(--line);font-size:.88rem;color:var(--muted)}",
   ".tcard .niv:last-of-type{border-bottom:0}",
   ".tcard .niv b{color:var(--fg);white-space:nowrap}",
   ".tpac{display:flex;flex-direction:column;gap:8px;margin:12px 0}",
   ".tpac .it{display:flex;align-items:center;gap:10px;background:var(--surface2);border:1px solid var(--line);border-radius:14px;padding:9px 12px}",
   ".tpac .av{width:38px;height:38px;border-radius:50%;flex:none;border:1px solid var(--line);background:var(--surface) center/cover no-repeat;display:grid;place-items:center;font-size:1.05rem;overflow:hidden}",
   ".tpac .d{flex:1;min-width:0}",
   ".tpac .d b{display:block;font-size:.93rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
   ".tpac .d span{font-size:.78rem;color:var(--muted)}",
   ".tpac .it button{flex:none;background:var(--lila);color:var(--ink);border:0;border-radius:999px;padding:6px 13px;font:700 .78rem Quicksand,inherit;cursor:pointer}",
   ".tpac .it.on{border-color:var(--menta)}",
   ".tcode{font-family:var(--mono);letter-spacing:.08em;word-break:break-all;background:var(--surface);border:1px dashed var(--line);border-radius:12px;padding:10px;font-size:.8rem;margin-top:8px}"
  ].join("");
  document.head.appendChild(st);

  var box=document.createElement("div");
  box.className="tcard";
  host.appendChild(box);

  /* ---- codificar y leer planes ---- */
  function encPlan(ids){
    try{return "LF"+btoa(unescape(encodeURIComponent(ids.join("|")))).replace(/=+$/,"")}catch(e){return ""}
  }
  function decPlan(code){
    try{
      var b=String(code||"").trim().replace(/\s+/g,"");
      if(b.slice(0,2).toUpperCase()!=="LF")return null;
      b=b.slice(2); while(b.length%4)b+="=";
      var ids=decodeURIComponent(escape(atob(b))).split("|").filter(Boolean);
      var ok=ids.filter(function(id){return PROGRAMS.some(function(p){return p.id===id})});
      return ok.length?ok:null;
    }catch(e){return null}
  }

  /* ---- activar licencia ---- */
  function openLic(){
    var filas=NIV.map(function(x){
      return '<div class="niv"><span>'+x.t+'</span><b>'+x.p+' al año</b></div>'}).join("");
    var o=T.sheet("tLic","Licencia de terapeuta o clínica",
      '<p class="muted">Con una licencia activa puedes dar de alta a tus pacientes, elegir los programas de cada uno y enviarles su plan.</p>'
      +'<div style="margin:12px 0">'+filas+'</div>'
      +'<div class="form"><label class="f full" for="tlCode">Tu código de licencia<input id="tlCode" type="text" autocomplete="off" placeholder="6 caracteres" style="text-transform:uppercase;letter-spacing:.15em;font-family:var(--mono)"></label></div>'
      +'<div class="row"><button class="btn pri" type="button" id="tlGo">Activar</button>'
      +(WA?'<a class="btn" target="_blank" rel="noopener" href="'+waLink("Hola, quiero una licencia de terapeuta para Lily Frequency")+'">Pedir mi licencia</a>':'')+'</div>');
    T.q(o,"#tlGo").onclick=function(){
      var v=T.q(o,"#tlCode").value.trim().toUpperCase();
      var hit=T.CUPOS.find(function(n){return T.cupoCode(n)===v});
      if(!hit)return toast("Código no válido. Escríbenos para conseguirlo.");
      T.pset("lf-cupo",{personas:hit,mascotas:Math.max(hit,2)});
      toast("Licencia activa: "+hit+" pacientes ✦");
      o.hidden=true; T.renderStrip(); render();
    };
    o.hidden=false;
  }

  /* ---- recibir un plan (lado del paciente) ---- */
  function openRecibir(){
    var o=T.sheet("tRec","Recibir mi plan",
      '<p class="muted">Pega aquí el código que te envió tu terapeuta y tus programas aparecerán en la biblioteca.</p>'
      +'<div class="form" style="margin-top:10px"><label class="f full" for="trCode">Código del plan<input id="trCode" type="text" autocomplete="off" placeholder="LF..."></label></div>'
      +'<div class="row"><button class="btn pri" type="button" id="trGo">Cargar mi plan</button></div>');
    T.q(o,"#trGo").onclick=function(){
      var ids=decPlan(T.q(o,"#trCode").value);
      if(!ids)return toast("Ese código no se pudo leer");
      store.set("lf-plan",ids);
      T.renderPlan(); T.markPlan();
      toast("Tu plan está listo: "+ids.length+" programas ✦");
      o.hidden=true; render();
    };
    o.hidden=false;
  }

  /* ---- enviar el plan de un paciente ---- */
  function openEnviar(){
    var p=T.me(), ids=T.plan();
    if(!ids.length)return toast("Este perfil todavía no tiene programas");
    var code=encPlan(ids);
    if(!code)return toast("No pude generar el código");
    var msg="Hola "+(p.name||"")+", este es tu plan en Lily Frequency. Ábrela, entra a Mi perfil, toca Recibir mi plan y pega este código:\n\n"+code;
    var o=T.sheet("tEnv","Enviar el plan de "+(p.name||"este perfil"),
      '<p class="muted">'+ids.length+' programas. Tu paciente pega este código en su propia app, en Mi perfil → Recibir mi plan.</p>'
      +'<div class="tcode" id="teCode">'+esc(code)+'</div>'
      +'<div class="row" style="margin-top:12px"><button class="btn pri" type="button" id="teCopy">Copiar el código</button>'
      +'<a class="btn" id="teWa" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(msg)+'">Enviar por WhatsApp</a></div>');
    T.q(o,"#teCopy").onclick=function(){try{copyText(code)}catch(e){toast("Copia el código a mano")}};
    o.hidden=false;
  }

  /* ---- la tarjeta ---- */
  function render(){
    var c=T.cupo(), esT=c.personas>=11, lista=T.profs(), yo=T.actId();

    if(!esT){
      box.innerHTML='<h3>🌿 ¿Eres terapeuta o tienes una clínica?</h3>'
      +'<p class="muted">Da de alta a tus pacientes, elige los programas de cada uno y envíales su plan a su propio celular.</p>'
      +'<div style="margin:12px 0">'+NIV.map(function(x){
         return '<div class="niv"><span>'+x.t+'</span><b>'+x.p+' al año</b></div>'}).join("")+'</div>'
      +'<div class="row"><button class="btn pri" type="button" id="tAct">Ya tengo mi código</button>'
      +(WA?'<a class="btn" target="_blank" rel="noopener" href="'+waLink("Hola, quiero una licencia de terapeuta para Lily Frequency")+'">Quiero una licencia</a>':'')+'</div>'
      +'<p class="muted" style="margin-top:14px;font-size:.84rem">¿Tu terapeuta te mandó un plan? <a href="#" id="tRec2">Recíbelo aquí</a>.</p>';
      box.querySelector("#tAct").onclick=openLic;
      box.querySelector("#tRec2").onclick=function(e){e.preventDefault();openRecibir()};
      return;
    }

    var items=lista.map(function(p){
      var n=T.pget("lf-"+p.id+"-plan",[]).length;
      return '<div class="it'+(p.id===yo?" on":"")+'"><span class="av" '+T.ava(p)+'>'+T.ico(p)+'</span>'
        +'<div class="d"><b>'+esc(p.name||"Sin nombre")+'</b><span>'+n+' programas'+(p.id===yo?" · abierto":"")+'</span></div>'
        +(p.id===yo?'':'<button type="button" data-ir="'+p.id+'">Abrir</button>')+'</div>'}).join("");

    box.innerHTML='<h3>🌿 Modo terapeuta · '+c.personas+' pacientes</h3>'
    +'<p class="muted">Abre a un paciente, elige sus programas en la biblioteca y envíale su plan.</p>'
    +'<div class="tpac">'+items+'</div>'
    +'<div class="row"><button class="btn pri" type="button" id="tPlan">Elegir los programas de '+esc(T.me().name||"este perfil")+'</button></div>'
    +'<div class="row" style="margin-top:8px"><button class="btn" type="button" id="tAdd">+ Paciente</button>'
    +'<button class="btn" type="button" id="tEnv">Enviar su plan</button>'
    +'<button class="btn" type="button" id="tUp">Ampliar licencia</button></div>'
    +'<p class="muted" style="margin-top:14px;font-size:.84rem">¿Te mandaron un plan a ti? <a href="#" id="tRec2">Recíbelo aquí</a>.</p>';

    box.querySelector(".tpac").onclick=function(e){
      var b=e.target.closest("[data-ir]"); if(!b)return;
      T.pset("lf-active",b.dataset.ir); location.reload()};
    box.querySelector("#tPlan").onclick=function(){
      T.setAssign(true);
      try{showTab("lib")}catch(x){}
      toast("Toca los programas para armar su plan")};
    box.querySelector("#tAdd").onclick=function(){T.openAdd()};
    box.querySelector("#tEnv").onclick=openEnviar;
    box.querySelector("#tUp").onclick=openLic;
    box.querySelector("#tRec2").onclick=function(e){e.preventDefault();openRecibir()};
  }

  render();
  window.LilyT.refrescarTerapeuta=render;
}
if(document.readyState!=="loading")setTimeout(boot,120);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(boot,120)});
})();
