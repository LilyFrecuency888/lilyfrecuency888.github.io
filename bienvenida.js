/* Bienvenida: primer arranque. Pide nombre, fecha de nacimiento y foto. */
(function(){
"use strict";
function ready(f){if(document.readyState!=="loading")setTimeout(f,60);else document.addEventListener("DOMContentLoaded",()=>setTimeout(f,60))}

ready(function(){
  if(typeof store==="undefined")return;
  var pf=null; try{pf=store.get("lf-profile",null)}catch(e){}
  if(pf&&pf.name&&pf.birth)return;          // ya tiene perfil: no molestar

  var CSS=document.createElement("style");
  CSS.textContent=[
  "#lfBv{position:fixed;inset:0;z-index:9999;overflow-y:auto;background:radial-gradient(900px 620px at 50% -6%,#3a2563,#120f1a 64%),#120f1a;",
    "font-family:inherit;color:#f4eeff;-webkit-tap-highlight-color:transparent}",
  "#lfBv .in{max-width:430px;margin:0 auto;padding:30px 24px 48px;text-align:center;min-height:100%;display:flex;flex-direction:column;justify-content:center}",
  "#lfBv .sg{width:112px;height:112px;margin:0 auto 14px;opacity:.9;animation:lfSpin 54s linear infinite}",
  "@keyframes lfSpin{to{transform:rotate(360deg)}}",
  "#lfBv h2{font-size:1.72rem;line-height:1.14;margin:0 0 8px;font-weight:600}",
  "#lfBv h2 span{background:linear-gradient(90deg,#c9a7ff,#ff9fd2,#8ff0d0);-webkit-background-clip:text;background-clip:text;color:transparent}",
  "#lfBv p.s{color:#bfb2dc;font-size:.95rem;line-height:1.55;margin:0 0 22px}",
  "#lfBv label{display:block;text-align:left;font-size:.8rem;letter-spacing:.06em;text-transform:uppercase;color:#c9a7ff;margin:16px 0 6px}",
  "#lfBv input[type=text],#lfBv input[type=date]{width:100%;padding:14px 16px;border-radius:15px;border:1px solid #3a2f52;",
    "background:rgba(29,23,48,.85);color:#f4eeff;font-size:1.02rem;font-family:inherit;-webkit-appearance:none;appearance:none}",
  "#lfBv input:focus{outline:0;border-color:#c9a7ff}",
  "#lfBv .ph{width:132px;height:132px;border-radius:50%;margin:8px auto 0;display:grid;place-items:center;cursor:pointer;position:relative;",
    "border:2px dashed rgba(201,167,255,.55);background:rgba(201,167,255,.08);overflow:hidden}",
  "#lfBv .ph img{width:100%;height:100%;object-fit:cover;border-radius:50%}",
  "#lfBv .ph .pl{font-size:2.1rem;line-height:1}",
  "#lfBv .ph.has{border-style:solid;border-color:#8ff0d0}",
  "#lfBv .phh{font-size:.84rem;color:#bfb2dc;margin:10px 0 0}",
  "#lfBv button.go{width:100%;margin-top:26px;padding:16px;border:0;border-radius:999px;cursor:pointer;",
    "background:linear-gradient(90deg,#c9a7ff,#ff9fd2);color:#2a1640;font:700 1.05rem inherit}",
  "#lfBv button.go:disabled{opacity:.45}",
  "#lfBv .err{color:#ff9fd2;font-size:.86rem;min-height:18px;margin-top:10px}",
  "#lfBv .leg{color:#8a7fab;font-size:.76rem;line-height:1.5;margin-top:18px}"
  ].join("");
  document.head.appendChild(CSS);

  // Semilla de la vida
  var sg='<svg class="sg" viewBox="-62 -62 124 124"><g fill="none" stroke="#c9a7ff" stroke-width="1.5" opacity=".85">'
    +'<circle r="28"/>';
  for(var i=0;i<6;i++){var a=i*Math.PI/3;sg+='<circle cx="'+(28*Math.cos(a)).toFixed(2)+'" cy="'+(28*Math.sin(a)).toFixed(2)+'" r="28"/>'}
  sg+='</g><circle r="56" fill="none" stroke="#ff9fd2" stroke-width="1" opacity=".5"/></svg>';

  var ov=document.createElement("div");
  ov.id="lfBv";
  ov.innerHTML='<div class="in">'+sg
   +'<h2>Bienvenida a <span>Lily Frequency</span></h2>'
   +'<p class="s">Antes de empezar, cuéntame quién eres. Tu nombre y tu fecha de nacimiento abren los programas que te corresponden hoy.</p>'
   +'<label for="bvName">Tu nombre</label><input id="bvName" type="text" autocomplete="name" placeholder="Como te gusta que te llamen" maxlength="40">'
   +'<label for="bvBirth">Tu fecha de nacimiento</label><input id="bvBirth" type="date">'
   +'<label style="text-align:center">Tu foto</label>'
   +'<div class="ph" id="bvPh"><span class="pl">✧</span></div>'
   +'<p class="phh">Toca el círculo para agregarla. Puedes hacerlo después desde tu perfil.</p>'
   +'<input id="bvFile" type="file" accept="image/*" hidden>'
   +'<div class="err" id="bvErr"></div>'
   +'<button class="go" id="bvGo">Comenzar ✦</button>'
   +'<p class="leg">Tu nombre, tu fecha y tu foto se guardan solo en este celular. No se envían a ningún servidor.</p>'
   +'</div>';
  document.body.appendChild(ov);
  document.documentElement.style.overflow="hidden";

  var q=function(id){return ov.querySelector("#"+id)};
  var nameI=q("bvName"), birthI=q("bvBirth"), ph=q("bvPh"), file=q("bvFile"), err=q("bvErr"), go=q("bvGo");
  var photoData=null;

  // Rango razonable de fechas
  var today=new Date(); birthI.max=today.toISOString().slice(0,10); birthI.min="1900-01-01";

  ph.onclick=function(){file.click()};
  file.onchange=function(e){
    var f=e.target.files&&e.target.files[0]; if(!f)return;
    var fr=new FileReader();
    fr.onload=function(){
      var img=new Image();
      img.onload=function(){
        var S=420, c=document.createElement("canvas"); c.width=c.height=S;
        var g=c.getContext("2d");
        var r=Math.max(S/img.width,S/img.height), w=img.width*r, h=img.height*r;
        g.drawImage(img,(S-w)/2,(S-h)/2,w,h);
        try{photoData=c.toDataURL("image/jpeg",.85)}catch(x){photoData=null}
        if(photoData){ph.innerHTML='<img alt="">';ph.querySelector("img").src=photoData;ph.className="ph has"}
      };
      img.onerror=function(){err.textContent="No pude leer esa imagen. Prueba con otra."};
      img.src=fr.result;
    };
    fr.readAsDataURL(f);
  };

  function check(){go.disabled=!(nameI.value.trim().length>=2 && birthI.value)}
  nameI.oninput=check; birthI.oninput=check; birthI.onchange=check; check();

  go.onclick=function(){
    var n=nameI.value.trim().slice(0,40), b=birthI.value;
    if(n.length<2){err.textContent="Escribe tu nombre";return}
    if(!b){err.textContent="Elige tu fecha de nacimiento";return}
    try{
      store.set("lf-profile",{name:n,birth:b});
      if(photoData)store.set("lf-photo",photoData);
    }catch(x){err.textContent="No pude guardar. Revisa el espacio del celular.";return}

    /* el nombre tambien va en la lista de perfiles, para la tira de arriba */
    try{
      var LP=window.LilyP;
      if(LP){
        var lst=JSON.parse(LP.raw("lf-profiles")||"null")||[];
        var act=LP.active();
        var hit=false;
        for(var i=0;i<lst.length;i++){if(lst[i].id===act){lst[i].name=n;hit=true}}
        if(!hit)lst.push({id:act||"p1",name:n,tipo:"persona"});
        LP.set("lf-profiles",JSON.stringify(lst));
      }
    }catch(x){}

    ov.style.transition="opacity .45s"; ov.style.opacity="0";
    setTimeout(function(){location.reload()},470);
  };

  setTimeout(function(){try{nameI.focus()}catch(x){}},420);
});
})();
