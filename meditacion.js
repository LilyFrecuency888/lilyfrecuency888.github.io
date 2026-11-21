/* Lily Frequency · meditación introductoria antes de cada programa
   Arroyo, aves y theta. Se puede saltar o desactivar. */
(function(){
"use strict";
var KEY="lf-x-medi";           /* "on" | "off" */
var opt=function(){try{return store.get(KEY,"on")}catch(e){return "on"}};
var setOpt=function(v){try{store.set(KEY,v)}catch(e){}};

/* ---------- voz, con la misma preferencia que el resto de la app ---------- */
var CAPT=(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.TextToSpeech)||null;
var nativo=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
var RATES={relax:[.70,.95],mujer:[.62,1.04],hombre:[.64,.80],andro:[.56,.88]};
function vz(){try{var id=store.get("lf-x-vozId","lily");return RATES[id]||RATES.mujer}catch(e){return RATES.mujer}}
function callar(){try{CAPT&&CAPT.stop()}catch(e){}try{speechSynthesis&&speechSynthesis.cancel()}catch(e){}}
function decir(t){
  var r=vz(), txt=String(t).replace(/[“”"«»]/g,"").replace(/!+/g,".");
  if(typeof window.lfHablar==="function"){try{window.lfHablar(txt);return}catch(e){}}
  if(CAPT&&nativo){try{CAPT.stop().catch(function(){}).then(function(){
    return CAPT.speak({text:txt,lang:"es-MX",rate:r[0],pitch:r[1],volume:1,category:"playback"})}).catch(function(){})}catch(e){}return}
  try{var u=new SpeechSynthesisUtterance(txt);u.lang="es-MX";u.rate=r[0];u.pitch=r[1];
    var nom="";try{nom=store.get("lf-x-vozName","")}catch(e){}
    var L=(speechSynthesis.getVoices()||[]).filter(function(v){return /^es/i.test(v.lang||"")});
    var p=nom?L.filter(function(v){return v.name===nom})[0]:null; if(!p)p=L[0]; if(p)u.voice=p;
    speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}
}

/* ---------- audio: arroyo, aves y theta ---------- */
var AC=null,nodos=[],aveT=null;
function ruido(seg){
  var n=Math.floor(AC.sampleRate*seg),b=AC.createBuffer(1,n,AC.sampleRate),d=b.getChannelData(0);
  for(var i=0;i<n;i++)d[i]=Math.random()*2-1;
  return b;
}
function ave(){
  if(!AC)return;
  var t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain(),pan=AC.createStereoPanner?AC.createStereoPanner():null;
  o.type="sine";
  var base=1700+Math.random()*1400, dur=.09+Math.random()*.13, subidas=1+Math.floor(Math.random()*3);
  o.frequency.setValueAtTime(base,t);
  for(var k=1;k<=subidas;k++){
    o.frequency.exponentialRampToValueAtTime(base*(1+.35*(k%2?1:-.5)),t+dur*k/subidas);
  }
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(.055+Math.random()*.045,t+.012);
  g.gain.exponentialRampToValueAtTime(.0006,t+dur+.1);
  o.connect(g);
  if(pan){pan.pan.value=Math.random()*1.6-.8;g.connect(pan);pan.connect(AC.__bus);nodos.push(pan)}
  else g.connect(AC.__bus);
  o.start(t);o.stop(t+dur+.16);
  nodos.push(o,g);
}
function audioOn(){
  try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){return}
  var bus=AC.createGain();bus.gain.value=0;bus.connect(AC.destination);AC.__bus=bus;nodos.push(bus);
  bus.gain.linearRampToValueAtTime(.9,AC.currentTime+4);

  /* arroyo: ruido filtrado con movimiento lento */
  var src=AC.createBufferSource();src.buffer=ruido(4);src.loop=true;
  var bp=AC.createBiquadFilter();bp.type="bandpass";bp.frequency.value=1100;bp.Q.value=.6;
  var hp=AC.createBiquadFilter();hp.type="highpass";hp.frequency.value=420;
  var ag=AC.createGain();ag.gain.value=.16;
  var lfo=AC.createOscillator(),lg=AC.createGain();
  lfo.frequency.value=.09;lg.gain.value=420;lfo.connect(lg);lg.connect(bp.frequency);
  src.connect(hp);hp.connect(bp);bp.connect(ag);ag.connect(bus);
  src.start();lfo.start();nodos.push(src,bp,hp,ag,lfo,lg);

  /* theta 6 Hz sobre 432, suave */
  var L=AC.createOscillator(),R=AC.createOscillator(),m=AC.createChannelMerger(2),tg=AC.createGain();
  L.frequency.value=432;R.frequency.value=438;tg.gain.value=.07;
  L.connect(m,0,0);R.connect(m,0,1);m.connect(tg);tg.connect(bus);
  L.start();R.start();nodos.push(L,R,m,tg);

  /* aves de vez en cuando */
  aveT=setInterval(function(){if(Math.random()<.62){ave();if(Math.random()<.4)setTimeout(ave,160+Math.random()*260)}},1600);
}
function audioOff(){
  if(aveT){clearInterval(aveT);aveT=null}
  if(!AC)return;
  try{AC.__bus.gain.setTargetAtTime(0,AC.currentTime,.5)}catch(e){}
  var a=AC;AC=null;nodos=[];
  setTimeout(function(){try{a.close()}catch(e){}},2200);
}

/* ---------- guion ---------- */
var FASES=[
 {s:14,v:"Antes de empezar, prepara tu espacio. Si quieres, enciende una vela, un incienso, o pon unas gotas de tu aceite favorito. No es necesario, pero ayuda a que el cuerpo sepa que este momento es distinto.",
    t:"Prepara tu espacio",
    sub:"Si lo deseas: una vela, incienso, aromaterapia o tu perfume. Opcional, pero el cuerpo lo agradece.",d:"espacio"},
 {s:11,v:"Siéntate con la espalda recta, o acuéstate. Cierra los ojos.",t:"Cierra los ojos",sub:"Espalda recta, o acostada. Suelta los hombros.",d:"calma"},
 {s:42,v:"Vamos a respirar tres veces. Inhala en cuatro tiempos. Sostén. Y suelta en cuatro tiempos. Otra vez: inhala. Sostén. Suelta. Y la última: inhala. Sostén. Suelta todo.",t:"Tres respiraciones",sub:"Inhala 4 · sostén 4 · suelta 4",d:"respirar"},
 {s:16,v:"Trae a tu mente tu intención para esta sesión. No la pienses. Siéntela, como si ya fuera verdad.",t:"Tu intención",sub:"¿Para qué estás aquí hoy? Siéntelo, no lo pienses.",d:"intencion"},
 {s:20,v:"Imagina una luz dorada que se abre desde el centro de tu pecho y forma una esfera alrededor de todo tu espacio. Esa esfera lo llena todo de amor y de paz. Nada que no sea amor entra aquí.",t:"Esfera dorada",sub:"Una esfera de luz dorada rodea tu espacio y lo llena de amor y paz.",d:"esfera"},
 {s:28,v:"Desde tu corazón sale un rayo de luz blanca. Sube, atraviesa el cielo, y llega hasta el sol central del universo. Y al mismo tiempo baja, atraviesa el suelo, y llega hasta el sol central de la Tierra. Quedas anclada entre el cielo y la tierra, como una unidad del cosmos.",t:"Cielo y tierra",sub:"Un rayo blanco te ancla al sol central del universo y al de la Tierra.",d:"rayo"},
 {s:24,v:"Ahora ese mismo rayo conecta tu cerebro con tu corazón. Mira cómo se enciende uno. Y luego el otro. Uno. Y el otro. Hasta que los dos quedan iluminados al mismo tiempo, unidos por la misma luz.",t:"Cerebro y corazón",sub:"La luz va de uno al otro hasta que quedan encendidos juntos.",d:"union"},
 {s:10,v:"Estás lista. Que esta sesión sea exactamente lo que necesitas hoy.",t:"Listo",sub:"Comenzamos.",d:"cierre"}
];

/* ---------- pintura ---------- */
function dibujar(cv,d,p,tot){
  var x=cv.getContext("2d"),W=cv.width,H=cv.height,cx=W/2,cy=H/2,R=Math.min(W,H)*.42;
  x.clearRect(0,0,W,H);
  var pul=.5+.5*Math.sin(tot*1.1);
  if(d==="respirar"){
    var ciclo=(tot%12)/12, r=R*(.4+.45*(ciclo<.33?ciclo/.33:ciclo<.5?1:1-(ciclo-.5)/.5));
    x.beginPath();x.arc(cx,cy,r,0,7);x.strokeStyle="rgba(201,167,255,.85)";x.lineWidth=2.4;x.stroke();
    x.beginPath();x.arc(cx,cy,r*.6,0,7);x.strokeStyle="rgba(143,240,208,.5)";x.lineWidth=1.6;x.stroke();
  } else if(d==="esfera"){
    var g=x.createRadialGradient(cx,cy,R*.05,cx,cy,R*(.6+.4*p));
    g.addColorStop(0,"rgba(255,230,150,.95)");g.addColorStop(.55,"rgba(255,205,110,.35)");g.addColorStop(1,"rgba(255,190,90,0)");
    x.fillStyle=g;x.beginPath();x.arc(cx,cy,R*(.6+.4*p),0,7);x.fill();
    x.beginPath();x.arc(cx,cy,R*(.55+.4*p),0,7);x.strokeStyle="rgba(255,217,138,"+(.35+.3*pul)+")";x.lineWidth=1.8;x.stroke();
  } else if(d==="rayo"){
    var w=2+5*pul;
    var lg=x.createLinearGradient(cx,0,cx,H);
    lg.addColorStop(0,"rgba(255,255,255,0)");lg.addColorStop(.5,"rgba(255,255,255,.95)");lg.addColorStop(1,"rgba(255,255,255,0)");
    x.fillStyle=lg;x.fillRect(cx-w/2,0,w,H);
    [[cy-R*.95,"rgba(255,245,200,"],[cy+R*.95,"rgba(255,200,120,"]].forEach(function(s,i){
      var r2=R*.16*(1+.25*Math.sin(tot*1.4+i*2));
      var g2=x.createRadialGradient(cx,s[0],1,cx,s[0],r2*2.2);
      g2.addColorStop(0,s[1]+".95)");g2.addColorStop(1,s[1]+"0)");
      x.fillStyle=g2;x.beginPath();x.arc(cx,s[0],r2*2.2,0,7);x.fill()});
    x.fillStyle="rgba(201,167,255,.9)";x.beginPath();x.arc(cx,cy,R*.1,0,7);x.fill();
  } else if(d==="union"){
    var alt=Math.sin(tot*1.9),cb=cy-R*.5,co=cy+R*.42;
    x.strokeStyle="rgba(255,255,255,.55)";x.lineWidth=2.5;
    x.beginPath();x.moveTo(cx,cb);x.lineTo(cx,co);x.stroke();
    [[cb,Math.max(.25,alt),"rgba(190,220,255,"],[co,Math.max(.25,-alt),"rgba(255,170,200,"]].forEach(function(s){
      var r3=R*.2*(.8+.4*s[1]);
      var g3=x.createRadialGradient(cx,s[0],1,cx,s[0],r3);
      g3.addColorStop(0,s[2]+(.5+.5*s[1])+")");g3.addColorStop(1,s[2]+"0)");
      x.fillStyle=g3;x.beginPath();x.arc(cx,s[0],r3,0,7);x.fill()});
  } else {
    for(var i=0;i<6;i++){
      var a=i*Math.PI/3+tot*.06,r4=R*.33;
      x.beginPath();x.arc(cx+r4*Math.cos(a),cy+r4*Math.sin(a),r4,0,7);
      x.strokeStyle="rgba(201,167,255,"+(.3+.2*pul)+")";x.lineWidth=1.4;x.stroke()}
    x.beginPath();x.arc(cx,cy,R*.33,0,7);x.strokeStyle="rgba(255,159,210,.5)";x.lineWidth=1.4;x.stroke();
  }
}

/* ---------- la meditación ---------- */
var corriendo=false;
function correr(listo){
  if(corriendo)return listo();
  corriendo=true;
  var css=document.createElement("style");
  css.textContent=[
   "#lfMed{position:fixed;inset:0;z-index:9998;background:radial-gradient(900px 640px at 50% 20%,#241a40,#0c0a14 70%),#0c0a14;",
     "display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f4eeff;font-family:inherit;padding:24px;text-align:center;transition:opacity .6s}",
   "#lfMed canvas{width:min(78vw,300px);height:min(78vw,300px);margin-bottom:18px}",
   "#lfMed h3{font-size:1.5rem;font-weight:600;margin:0 0 8px}",
   "#lfMed p{color:#cfc3ea;font-size:1rem;line-height:1.55;max-width:400px;margin:0 auto;min-height:3.2em}",
   "#lfMed .bar{width:min(80vw,320px);height:3px;border-radius:3px;background:rgba(201,167,255,.2);margin:22px 0 18px;overflow:hidden}",
   "#lfMed .bar i{display:block;height:100%;background:linear-gradient(90deg,#c9a7ff,#ff9fd2);width:0}",
   "#lfMed .acc{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}",
   "#lfMed button{background:transparent;border:1.5px solid rgba(201,167,255,.45);color:#e4d4ff;border-radius:999px;padding:10px 18px;font:600 .88rem inherit;cursor:pointer}",
   "#lfMed button.pri{background:linear-gradient(90deg,#c9a7ff,#ff9fd2);border:0;color:#2a1640;font-weight:700}"
  ].join("");
  document.head.appendChild(css);

  var ov=document.createElement("div");ov.id="lfMed";
  ov.innerHTML='<canvas width="600" height="600"></canvas><h3></h3><p></p>'
   +'<div class="bar"><i></i></div><div class="acc">'
   +'<button class="pri" id="lmSkip">Saltar e ir al programa</button>'
   +'<button id="lmOff">No mostrarla otra vez</button></div>';
  document.body.appendChild(ov);
  document.documentElement.style.overflow="hidden";

  var cv=ov.querySelector("canvas"),h3=ov.querySelector("h3"),pp=ov.querySelector("p"),barra=ov.querySelector(".bar i");
  var t0=Date.now(), fase=-1, raf=null, fin=false;

  /* Con «Mi voz (Lily)»: cada fase suena con su audio grabado (voz/med-01.mp3 … med-08.mp3)
     y dura lo que dura el audio, más una pausa breve. Si falta un audio, se lee con la voz del teléfono. */
  var conVoz=false;try{conVoz=typeof window.lfVozLily==="function"?window.lfVozLily():(store.get("lf-x-vozId","lily")==="lily")}catch(e){}
  var D=FASES.map(function(f){return f.s});
  var player=null, falla={};
  if(conVoz){
    player=new Audio();player.preload="auto";
    FASES.forEach(function(f,i){
      var a=new Audio();a.preload="metadata";a.src=clip(i);
      a.onloadedmetadata=function(){if(isFinite(a.duration)&&a.duration>0)D[i]=a.duration+1.6};
      a.onerror=function(){falla[i]=true};
    });
  }
  function clip(i){return "voz/med-"+String(i+1).padStart(2,"0")+".mp3"}
  function tocar(i,texto){
    if(!conVoz||falla[i]){decir(texto);return}
    try{callar();player.pause();player.src=clip(i);player.currentTime=0;
      player.onerror=function(){falla[i]=true;decir(texto)};
      var pr=player.play();if(pr&&pr.catch)pr.catch(function(){decir(texto)})}catch(e){decir(texto)}
  }

  audioOn();

  function terminar(apagar){
    if(fin)return; fin=true;
    cancelAnimationFrame(raf); callar(); audioOff();
    try{player&&player.pause()}catch(e){}
    ov.style.opacity="0";
    setTimeout(function(){
      try{ov.remove()}catch(e){}
      try{css.remove()}catch(e){}
      document.documentElement.style.overflow="";
      corriendo=false;
      if(apagar)setOpt("off");
      listo();
    },620);
  }
  ov.querySelector("#lmSkip").onclick=function(){terminar(false)};
  ov.querySelector("#lmOff").onclick=function(){toast&&toast("Puedes volver a activarla en Mi perfil");terminar(true)};

  function bucle(){
    if(fin)return;
    var seg=(Date.now()-t0)/1000, acum=0, i=0, f=FASES[0];
    var total=D.reduce(function(a,b){return a+b},0);
    for(i=0;i<FASES.length;i++){if(seg<acum+D[i]){f=FASES[i];break}acum+=D[i]}
    if(i>=FASES.length)return terminar(false);
    if(i!==fase){fase=i;h3.textContent=f.t;pp.textContent=f.sub;tocar(i,f.v)}
    var p=(seg-acum)/D[i];
    barra.style.width=(seg/total*100).toFixed(1)+"%";
    dibujar(cv,f.d,p,seg);
    raf=requestAnimationFrame(bucle);
  }
  bucle();
}

/* ---------- engancharla antes de cada programa ---------- */
var _play=window.play;
if(typeof _play==="function"){
  window.play=function(){
    var yaSonando=false;
    try{yaSonando=!!(playing||paused)}catch(e){}
    if(opt()!=="on"||yaSonando||corriendo||document.getElementById("lmPreg"))return _play.apply(window,arguments);
    var args=arguments;
    preguntar(function(meditar){
      /* Encender el audio del programa con este toque: en Android, si se enciende
         después de la meditación (sin toque), el sistema lo deja mudo */
      try{if(typeof ensureCtx==="function"){ensureCtx();if(typeof wakeAudio==="function")wakeAudio()}}catch(e){}
      if(meditar)correr(function(){try{_play.apply(window,args)}catch(e){}});
      else{try{_play.apply(window,args)}catch(e){}}
    });
    return Promise.resolve();
  };
}

/* ---------- sugerencia: nada suena hasta que elijas ---------- */
function preguntar(elegir){
  var css=document.createElement("style");
  css.textContent=[
   "#lmPreg{position:fixed;inset:0;z-index:9997;background:rgba(12,10,20,.72);display:flex;align-items:center;justify-content:center;padding:20px}",
   "#lmPreg .c{max-width:380px;width:100%;background:radial-gradient(420px 300px at 50% 0%,#2b2050,#141022);color:#f4eeff;border:1px solid rgba(201,167,255,.35);border-radius:24px;padding:24px 20px;text-align:center}",
   "#lmPreg h3{font-size:1.25rem;font-weight:600;margin:6px 0 8px}",
   "#lmPreg p{color:#cfc3ea;font-size:.95rem;line-height:1.5;margin:0 0 18px}",
   "#lmPreg button{display:block;width:100%;border-radius:999px;padding:13px 18px;font:700 .95rem inherit;cursor:pointer;margin-top:10px}",
   "#lmPreg .pri{background:linear-gradient(90deg,#c9a7ff,#ff9fd2);border:0;color:#2a1640}",
   "#lmPreg .sec{background:transparent;border:1.5px solid rgba(201,167,255,.5);color:#e4d4ff}",
   "#lmPreg .lnk{background:none;border:0;color:#bfb2dc;font-weight:600;font-size:.82rem;text-decoration:underline;padding:8px}"
  ].join("");
  document.head.appendChild(css);
  var d=document.createElement("div");d.id="lmPreg";
  d.innerHTML='<div class="c" role="dialog" aria-modal="true" aria-labelledby="lmPregT">'
   +'<div style="font-size:1.8rem;color:#c9a7ff">&#10022;</div>'
   +'<h3 id="lmPregT">¿Deseas iniciar con la meditación?</h3>'
   +'<p>Un par de minutos para centrarte y calmarte, y recibir tu programa en un estado más receptivo.</p>'
   +'<button type="button" class="pri" id="lmSi">Sí, meditar primero</button>'
   +'<button type="button" class="sec" id="lmIr">Ir directo al programa</button>'
   +'<button type="button" class="lnk" id="lmNo">No volver a preguntar</button></div>';
  document.body.appendChild(d);
  function cerrar(meditar,apagar){
    try{d.remove()}catch(e){}try{css.remove()}catch(e){}
    if(apagar){setOpt("off");toast&&toast("Puedes volver a activarla en Mi perfil")}
    elegir(meditar);
  }
  d.querySelector("#lmSi").onclick=function(){cerrar(true,false)};
  d.querySelector("#lmIr").onclick=function(){cerrar(false,false)};
  d.querySelector("#lmNo").onclick=function(){cerrar(false,true)};
}

/* ---------- interruptor en Mi perfil ---------- */
function interruptor(){
  var host=document.querySelector('[data-view="cuenta"]');if(!host||host.querySelector("#lmBox"))return;
  var d=document.createElement("div");d.id="lmBox";
  d.style.cssText="border:1px solid var(--line);border-radius:18px;padding:16px;margin-top:14px";
  function pinta(){
    var on=opt()==="on";
    d.innerHTML='<h3 style="font-size:1.05rem;margin-bottom:4px">✦ Meditación de entrada</h3>'
     +'<p class="muted">Antes de cada programa: respiración, intención, esfera dorada y conexión cielo-tierra, con arroyo y aves de fondo.</p>'
     +'<div class="row" style="margin-top:12px"><button class="btn'+(on?"":" pri")+'" type="button" id="lmT">'+(on?"Desactivar":"Activar")+'</button>'
     +'<button class="btn" type="button" id="lmV">Verla ahora</button></div>';
    d.querySelector("#lmT").onclick=function(){setOpt(on?"off":"on");pinta();toast&&toast(on?"Meditación de entrada desactivada":"Meditación de entrada activada ✦")};
    d.querySelector("#lmV").onclick=function(){correr(function(){})};
  }
  pinta();host.appendChild(d);
}
/* ---------- tarjeta al inicio de Hoy ---------- */
function alInicio(){
  var host=document.querySelector('[data-view="programas"]');
  if(!host||document.getElementById("lmInicio"))return;
  var sg='<svg viewBox="-62 -62 124 124" style="width:56px;height:56px;flex:none"><g fill="none" stroke="currentColor" stroke-width="1.6" opacity=".9"><circle r="28"/>';
  for(var i=0;i<6;i++){var a=i*Math.PI/3;
    sg+='<circle cx="'+(28*Math.cos(a)).toFixed(2)+'" cy="'+(28*Math.sin(a)).toFixed(2)+'" r="28"/>'}
  sg+='</g></svg>';
  var d=document.createElement("div");
  d.id="lmInicio";
  d.style.cssText="display:flex;gap:14px;align-items:center;border:1px solid var(--menta);border-radius:20px;padding:16px;margin-bottom:14px;"+
    "background:linear-gradient(135deg,rgba(143,240,208,.16),rgba(201,167,255,.10));cursor:pointer;color:var(--lila)";
  d.innerHTML=sg+'<div style="flex:1;color:var(--fg)">'+
    '<b style="display:block;font-size:1.02rem;margin-bottom:2px">✦ Meditación de entrada</b>'+
    '<span class="muted" style="font-size:.84rem;line-height:1.45;display:block">Respiración, intención, esfera dorada y conexión cielo-tierra. Empieza aquí tu sesión.</span></div>'+
    '<span style="font-size:1.5rem;color:var(--lila)">▸</span>';
  d.onclick=function(){correr(function(){})};
  host.insertBefore(d,host.firstChild);
}
if(document.readyState!=="loading")setTimeout(alInicio,350);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(alInicio,350)});

if(document.readyState!=="loading")setTimeout(interruptor,400);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(interruptor,400)});
})();
