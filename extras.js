/* Lily Frequency · funciones de bienestar
   Pulso con cámara, geometría sagrada, vibración al respirar, ambientes,
   temporizador, voz guiada, diario y racha, día universal y recordatorios. */
(function(){
"use strict";
const CAP=window.Capacitor&&window.Capacitor.Plugins||{};
const isNative=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
const opt=(k,d)=>store.get("lf-x-"+k,d), setOpt=(k,v)=>store.set("lf-x-"+k,v);
const today=(d=new Date())=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");

/* ---------- estilos ---------- */
const css=`
.xbar{display:flex;gap:6px;overflow-x:auto;margin:12px 0 2px;padding-bottom:4px}
.xbar button{flex:none;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:66px;padding:8px 8px;border-radius:14px;background:var(--surface2);border:1px solid var(--line);font-size:.7rem;font-weight:700;color:var(--muted)}
.xbar button b{font-size:1.15rem;line-height:1;color:var(--lila)}
.xbar button.on{border-color:var(--lila);color:var(--fg)}
.xstreak{display:inline-flex;align-items:center;gap:4px;margin-right:6px;padding:3px 10px;border-radius:999px;font-size:.72rem;font-weight:800;background:var(--surface2);border:1px solid var(--line);color:var(--fg)}
.xgeo{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}

.xsheet .box h2{margin:0 0 4px}
.xsheet .xclose{align-self:flex-end}
.xrow{display:flex;align-items:center;gap:10px;margin:8px 0}
.xrow label{flex:1;font-weight:700;font-size:.9rem}
.xrow input[type=range]{flex:1.4}
.xbig{font-family:var(--display,inherit);font-size:3.4rem;font-weight:800;line-height:1;color:var(--lila);text-align:center}
.xmoods{display:flex;justify-content:space-between;gap:6px}
.xmoods button{flex:1;font-size:1.6rem;padding:8px 0;border-radius:14px;background:var(--surface2);border:1px solid var(--line)}
.xmoods button[aria-pressed=true]{border-color:var(--lila);background:color-mix(in srgb,var(--lila) 22%,transparent)}
.xlist{display:flex;flex-direction:column;gap:6px}
.xlist div{background:var(--surface2);border:1px solid var(--line);border-radius:12px;padding:8px 10px;font-size:.84rem}
.xlist small{color:var(--muted)}
.ximm{position:fixed;inset:0;z-index:60;background:radial-gradient(circle at 50% 45%,#2a1d44,#0c0913 75%);color:#f4eeff;display:flex;flex-direction:column;align-items:center;justify-content:center}
.ximm canvas{width:min(92vw,92vh);height:min(92vw,92vh)}
.ximm .t{position:absolute;bottom:calc(28px + env(safe-area-inset-bottom,0px));left:20px;right:20px;text-align:center}
.ximm .t b{font-size:1.5rem;letter-spacing:.04em}
.ximm .t p{margin:6px 0 0;opacity:.85;font-size:1rem;line-height:1.4}
.ximm .x{position:absolute;top:calc(14px + env(safe-area-inset-top,0px));right:16px;background:rgba(255,255,255,.12);color:#fff;border:0;border-radius:999px;padding:8px 14px;font-weight:700}
.xwave{width:100%;height:70px;border-radius:12px;background:var(--surface2);border:1px solid var(--line)}
`;
const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

/* ---------- utilidades de interfaz ---------- */
function sheet(id,title,html){
  let o=document.getElementById(id);if(o)o.remove();
  o=document.createElement("div");o.className="overlay sheet xsheet";o.id=id;
  o.innerHTML=`<div class="box"><button class="btn xclose" type="button">Cerrar ✕</button><h2>${title}</h2>${html}</div>`;
  o.querySelector(".xclose").onclick=()=>{o.hidden=true;o.dispatchEvent(new Event("close"))};
  document.body.appendChild(o);return o;
}
const q=(o,s)=>o.querySelector(s);

/* ---------- barra de bienestar ---------- */
const bar=document.createElement("div");bar.className="xbar";bar.setAttribute("aria-label","Bienestar");
bar.innerHTML=`
<button type="button" data-x="imm"><b>✦</b>Inmersivo</button>
<button type="button" data-x="amb"><b>≋</b>Ambiente</button>
<button type="button" data-x="sleep"><b>☾</b>Dormir</button>
<button type="button" data-x="pulse"><b>♡</b>Mi pulso</button>
<button type="button" data-x="diary"><b>✎</b>Diario</button>
<button type="button" data-x="remind"><b>⏰</b>Recordar</button>
<button type="button" data-x="voice"><b>🗣</b>Voz</button>
<button type="button" data-x="vib"><b>〰</b>Vibrar</button>
<button type="button" data-x="geo"><b>✡</b>Geometría</button>`;
const ctr=document.querySelector(".controls");ctr&&ctr.parentNode.insertBefore(bar,ctr.nextSibling);
function syncToggles(){[["voice",opt("voice",true)],["vib",opt("vib",true)],["geo",opt("geo",true)],["sleep",!!sleepT],["amb",ambOn()]].forEach(([k,v])=>{const b=q(bar,`[data-x=${k}]`);b&&b.classList.toggle("on",!!v)})}
bar.onclick=e=>{const b=e.target.closest("[data-x]");if(!b)return;const k=b.dataset.x;
  if(k==="voice"){openVoz()}
  else if(k==="vib"){setOpt("vib",!opt("vib",true));toast(opt("vib",true)?"Vibración al respirar activada":"Vibración apagada");if(opt("vib",true))buzz(40)}
  else if(k==="geo"){setOpt("geo",!opt("geo",true));toast(opt("geo",true)?"Geometría sagrada activada ✡":"Geometría sagrada apagada")}
  else ({imm:openImm,amb:openAmb,sleep:openSleep,pulse:openPulse,diary:openDiary,remind:openRemind})[k]();
  syncToggles()};

/* ---------- 2. geometría sagrada ---------- */
function flower(g,cx,cy,r,rot,alpha,lw){
  g.save();g.translate(cx,cy);g.rotate(rot);g.lineWidth=lw;
  for(let qq=-2;qq<=2;qq++)for(let s=-2;s<=2;s++){if(Math.abs(-qq-s)>2)continue;const x=r*(qq+s/2),y=r*s*Math.sqrt(3)/2,t=(x+2*r)/(4*r);
    g.strokeStyle=`rgba(${Math.round(201+54*t)},${Math.round(167-8*t)},${Math.round(255-45*t)},${alpha})`;g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.stroke()}
  g.strokeStyle=`rgba(201,167,255,${alpha})`;g.lineWidth=lw*1.6;g.beginPath();g.arc(0,0,r*3,0,Math.PI*2);g.stroke();g.restore();
}
function merkaba(g,cx,cy,R,rot,alpha,lw){
  [["255,217,138",-Math.PI/2+rot],["143,240,208",Math.PI/2-rot]].forEach(([c,a0])=>{
    const P=[0,1,2].map(i=>[cx+Math.cos(a0+i*2*Math.PI/3)*R,cy+Math.sin(a0+i*2*Math.PI/3)*R]);
    g.strokeStyle=`rgba(${c},${alpha})`;g.lineWidth=lw;g.beginPath();P.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.stroke();
    g.lineWidth=lw*.5;P.forEach(p=>{g.beginPath();g.moveTo(cx,cy);g.lineTo(p[0],p[1]);g.stroke()})});
}
/* Pulso visual lento: nunca más de 0.5 Hz, sin destellos (seguro para fotosensibles) */
function slowPulse(t){const s=cur&&cur.steps[idx];const b=s&&s.b?Math.min(s.b,8):1;return Math.sin(t/1000*Math.PI*2*(b/16))}
const crystal=document.querySelector(".crystal");let geo=null;
if(crystal){geo=document.createElement("canvas");geo.className="xgeo";geo.width=640;geo.height=440;crystal.insertBefore(geo,crystal.firstChild)}
function drawGeo(t){
  if(geo){const g=geo.getContext("2d"),W=geo.width,H=geo.height;g.clearRect(0,0,W,H);
    if(opt("geo",true)){const k=1+breathLevel*.08+(playing?slowPulse(t)*.02:0),a=playing?.5:.3;
      flower(g,W/2,H/2,46*k,t/24000,a,2.2);merkaba(g,W/2,H/2,104*k,t/30000,a+.15,2.6)}}
  if(imm&&!imm.hidden)drawImm(t);
  requestAnimationFrame(drawGeo);
}
requestAnimationFrame(drawGeo);

/* ---------- modo inmersivo ---------- */
let imm=null;
function openImm(){
  if(!imm){imm=document.createElement("div");imm.className="ximm";imm.hidden=true;
    imm.innerHTML=`<button class="x" type="button">Salir ✕</button><canvas width="900" height="900"></canvas><div class="t"><b class="hz"></b><p class="ph"></p><p class="tx"></p></div>`;
    q(imm,".x").onclick=()=>{imm.hidden=true;try{document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen()}catch{}};
    document.body.appendChild(imm)}
  imm.hidden=false;try{imm.requestFullscreen&&imm.requestFullscreen().catch(()=>{})}catch{}
  if(!playing&&cur)play();
}
function drawImm(t){
  const cv=q(imm,"canvas"),g=cv.getContext("2d"),W=cv.width,c=W/2;g.clearRect(0,0,W,W);
  const k=1+breathLevel*.12+(playing?slowPulse(t)*.025:0);
  const grd=g.createRadialGradient(c,c,10,c,c,W*.48);grd.addColorStop(0,`rgba(201,167,255,${.18+breathLevel*.12})`);grd.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=grd;g.fillRect(0,0,W,W);
  for(let i=0;i<24;i++){const a=i/24*Math.PI*2+t/40000,R=W*.44;g.fillStyle=i%2?"rgba(255,159,210,.8)":"rgba(143,240,208,.8)";g.beginPath();g.arc(c+Math.cos(a)*R,c+Math.sin(a)*R,i%6?3:6,0,Math.PI*2);g.fill()}
  flower(g,c,c,W*.105*k,t/26000,.85,2.4);merkaba(g,c,c,W*.24*k,t/32000,.95,3);
  g.fillStyle="#fff";g.globalAlpha=.6+breathLevel*.4;g.beginPath();g.arc(c,c,8+breathLevel*6,0,Math.PI*2);g.fill();g.globalAlpha=1;
  const s=cur&&cur.steps[idx];q(imm,".hz").textContent=s?(+s.f).toLocaleString("es",{maximumFractionDigits:2})+" Hz · "+(cur.name||""):"";
  q(imm,".ph").textContent=$("breathPh")?$("breathPh").textContent:"";q(imm,".tx").textContent=s&&s.g?s.g:"";
}

/* ---------- 3. vibración al respirar ---------- */
function buzz(p){if(!opt("vib",true))return;try{if(CAP.Haptics&&isNative){(Array.isArray(p)?p.filter((_,i)=>i%2===0):[p]).forEach((d,i)=>setTimeout(()=>CAP.Haptics.vibrate({duration:d}),i*(d+90)))}else if(navigator.vibrate)navigator.vibrate(p)}catch{}}
let lastPh="";
const _breathTick=window.breathTick;
if(typeof _breathTick==="function")window.breathTick=function(s,t){_breathTick(s,t);
  const ph=($("breathPh").textContent||"").split(" · ")[0];
  if(ph&&ph!==lastPh){const P=s.ph||["Inhala","Sostén","Exhala","Pausa"];const i=P.indexOf(ph);
    if(i===0)buzz(70);else if(i===2)buzz([35,80,35]);else if(i===1&&ph)buzz(15);
    /* con «Mi voz (Lily)»: decir la fase con su audio, solo en respiraciones con los nombres de siempre */
    if(!s.ph&&window.lfVozLily()&&VOZ_RESP[ph])tocarVoz(VOZ_RESP[ph])}
  lastPh=ph};

/* ---------- 4. ambientes ---------- */
const AMB={lluvia:"Lluvia",mar:"Mar",viento:"Viento del bosque",cuencos:"Cuencos"};
let amb={},ambBus=null,bowlTimer=null;
const ambVol=()=>opt("amb",{lluvia:0,mar:0,viento:0,cuencos:0});
const ambOn=()=>Object.values(ambVol()).some(v=>v>0);
function noiseBuf(type){const n=ctx.sampleRate*4,b=ctx.createBuffer(1,n,ctx.sampleRate),d=b.getChannelData(0);let last=0,b0=0,b1=0,b2=0;
  for(let i=0;i<n;i++){const w=Math.random()*2-1;if(type==="brown"){last=(last+.02*w)/1.02;d[i]=last*3.5}else if(type==="pink"){b0=.997*b0+w*.029591;b1=.985*b1+w*.032534;b2=.95*b2+w*.048056;d[i]=(b0+b1+b2+w*.0187)*1.6}else d[i]=w}return b}
function src(buf){const s=ctx.createBufferSource();s.buffer=buf;s.loop=true;s.start();return s}
function buildAmb(){
  ensureCtx();if(ambBus)return;ambBus=ctx.createGain();ambBus.gain.value=1;ambBus.connect(ctx.destination);
  const mk=()=>{const g=ctx.createGain();g.gain.value=0;g.connect(ambBus);return g};
  // lluvia: ruido blanco filtrado + gotas
  {const g=mk(),s=src(noiseBuf("white")),hp=ctx.createBiquadFilter(),lp=ctx.createBiquadFilter();hp.type="highpass";hp.frequency.value=900;lp.type="lowpass";lp.frequency.value=7000;s.connect(hp);hp.connect(lp);const sg=ctx.createGain();sg.gain.value=.22;lp.connect(sg);sg.connect(g);amb.lluvia=g}
  // mar: ruido café con oleaje lento
  {const g=mk(),s=src(noiseBuf("brown")),lp=ctx.createBiquadFilter(),wg=ctx.createGain(),l=ctx.createOscillator(),lg=ctx.createGain();lp.type="lowpass";lp.frequency.value=900;wg.gain.value=.5;l.frequency.value=.09;lg.gain.value=.45;l.connect(lg);lg.connect(wg.gain);l.start();s.connect(lp);lp.connect(wg);wg.connect(g);amb.mar=g}
  // viento: ruido rosa con filtro que se mueve
  {const g=mk(),s=src(noiseBuf("pink")),bp=ctx.createBiquadFilter(),l=ctx.createOscillator(),lg=ctx.createGain();bp.type="bandpass";bp.frequency.value=500;bp.Q.value=.8;l.frequency.value=.05;lg.gain.value=300;l.connect(lg);lg.connect(bp.frequency);l.start();const sg=ctx.createGain();sg.gain.value=.5;s.connect(bp);bp.connect(sg);sg.connect(g);amb.viento=g}
  // cuencos: tonos con armónicos y caída larga
  {const g=mk();amb.cuencos=g;const ring=()=>{if(!ctx||g.gain.value<.001)return;const n=ctx.currentTime,base=[174,220,256,288,324][Math.floor(Math.random()*5)];
    [[1,.5],[2.76,.22],[5.4,.1]].forEach(([m,a])=>{const o=ctx.createOscillator(),e=ctx.createGain();o.frequency.value=base*m;e.gain.setValueAtTime(0,n);e.gain.linearRampToValueAtTime(a*.35,n+.04);e.gain.exponentialRampToValueAtTime(.0005,n+9);o.connect(e);e.connect(g);o.start(n);o.stop(n+9.2)})};
    bowlTimer=setInterval(()=>ring(),8500);setTimeout(ring,300)}
}
function applyAmb(){if(!ambOn()&&!ambBus)return;buildAmb();ctx.resume&&ctx.resume();const v=ambVol();Object.keys(AMB).forEach(k=>amb[k].gain.setTargetAtTime((v[k]||0)/100*.9,ctx.currentTime,.4))}
function openAmb(){
  const v=ambVol();
  const o=sheet("xAmb","Ambiente",`<p class="muted">Mezcla sonidos de la naturaleza con tu frecuencia. Cada uno tiene su volumen.</p>`+
    Object.entries(AMB).map(([k,n])=>`<div class="xrow"><label for="xa-${k}">${n}</label><input type="range" min="0" max="100" value="${v[k]||0}" id="xa-${k}" data-k="${k}"></div>`).join("")+
    `<div class="row"><button class="btn" type="button" id="xaOff">Silenciar todo</button></div>`);
  o.oninput=e=>{const k=e.target.dataset.k;if(!k)return;const nv=ambVol();nv[k]=+e.target.value;setOpt("amb",nv);applyAmb();syncToggles()};
  q(o,"#xaOff").onclick=()=>{setOpt("amb",{lluvia:0,mar:0,viento:0,cuencos:0});o.querySelectorAll("input").forEach(i=>i.value=0);applyAmb();syncToggles()};
  o.hidden=false;
}

/* ---------- 5. temporizador para dormir ---------- */
let sleepT=null,sleepEnd=0;
function openSleep(){
  const o=sheet("xSleep","Temporizador para dormir",`<p class="muted">La sesión y el ambiente bajan suave y se apagan solos. Deja el teléfono con la pantalla encendida y el brillo bajo para que el sonido no se corte.</p>
  <div class="row">${[15,30,45,60,90].map(m=>`<button class="btn" type="button" data-m="${m}">${m} min</button>`).join("")}</div>
  <p class="muted" id="xsLeft"></p><div class="row"><button class="btn" type="button" id="xsOff">Cancelar temporizador</button></div>`);
  const left=()=>{q(o,"#xsLeft").textContent=sleepT?"Se apaga en "+Math.ceil((sleepEnd-Date.now())/60000)+" min ☾":"Sin temporizador"};left();
  o.onclick=e=>{const b=e.target.closest("[data-m]");if(!b)return;setSleep(+b.dataset.m);left();if(!playing&&cur)play();toast("Se apagará en "+b.dataset.m+" min ☾")};
  q(o,"#xsOff").onclick=()=>{clearTimeout(sleepT);sleepT=null;left();syncToggles()};
  o.hidden=false;
}
function setSleep(min){clearTimeout(sleepT);sleepEnd=Date.now()+min*60000;
  const check=()=>{const left=sleepEnd-Date.now();if(left>0){sleepT=setTimeout(check,Math.min(left,30000));return}
    sleepT=null;try{if(ctx){master.gain.setTargetAtTime(0,ctx.currentTime,6);ambBus&&ambBus.gain.setTargetAtTime(0,ctx.currentTime,6)}}catch{}
    setTimeout(()=>{stop(true);if(ambBus){ambBus.gain.value=1;setOpt("amb",{lluvia:0,mar:0,viento:0,cuencos:0});applyAmb()}syncToggles()},20000)};
  sleepT=setTimeout(check,1000);syncToggles()}

/* ---------- 6. voz guiada ---------- */
var VOCES=[
 /* La voz de Lily: suena con sus audios grabados (meditación de entrada y respiración).
    Lo que todavía no tiene audio se lee con una voz de mujer del teléfono. */
 {id:"lily",  n:"Mi voz (Lily) ✦",        rate:.62, pitch:1.04, grabada:true,
   pref:/x-(eea|eec|esc|esf|sfb)\b|female|mujer|femenin|helena|laura|sabina|paulina|m[oó]nica|elvira|dalia|lupe|pen[eé]lope|luc[ií]a|conchita|elena|ximena|valentina/i,
   no:/x-(eed|eef|esd)\b|(^|[^e])male|hombre|masculin|pablo|ra[uú]l|jorge|diego|juan|carlos|enrique|[aá]lvaro|miguel|andr[eé]s|gerardo|tom[aá]s/i},
 {id:"relax", n:"Relajante",              rate:.70, pitch:.95},
 /* Voces de Google en español: eea, eec, esc, esf, sfb son de mujer; eed, eef, esd son de hombre.
    En computadora: Helena, Laura, Sabina, Paulina, Mónica... de mujer; Pablo, Raúl, Jorge... de hombre. */
 {id:"mujer", n:"Mujer suave y pausada",  rate:.62, pitch:1.04,
   pref:/x-(eea|eec|esc|esf|sfb)\b|female|mujer|femenin|helena|laura|sabina|paulina|m[oó]nica|elvira|dalia|lupe|pen[eé]lope|lucia|luc[ií]a|conchita|elena|ximena|valentina/i,
   no:/x-(eed|eef|esd)\b|(^|[^e])male|hombre|masculin|pablo|ra[uú]l|jorge|diego|juan|carlos|enrique|[aá]lvaro|miguel|enrique|andr[eé]s|gerardo|jorge|tom[aá]s/i},
 {id:"hombre",n:"Hombre grave de locutor",rate:.58, pitch:.80,
   pref:/x-(eed|eef|esd)\b|(^|[^e])male|hombre|masculin|pablo|ra[uú]l|jorge|diego|juan|carlos|enrique|[aá]lvaro|miguel|andr[eé]s|gerardo|tom[aá]s/i,
   no:/x-(eea|eec|esc|esf|sfb)\b|female|mujer|femenin|helena|laura|sabina|paulina|m[oó]nica|elvira|dalia|lupe|pen[eé]lope|luc[ií]a|conchita|elena|ximena|valentina/i},
 {id:"andro", n:"Meditativa andrógina",   rate:.56, pitch:.88}
];
/* Elige en el teléfono la voz que mejor encaja con el estilo pedido.
   Si no hay coincidencia, reparte voces distintas entre los cinco estilos,
   para que no suene siempre la misma persona con otro tono. */
function prefiere(V){
  var L=vocesEs();
  if(!L.length)return null;
  if(V.pref){
    for(var i=0;i<L.length;i++){var n=(L[i].name||"")+" "+(L[i].voiceURI||"");
      if(V.pref.test(n)&&!(V.no&&V.no.test(n)))return L[i].name||null}
    /* sin una voz clara de ese tipo: al menos no usar una del tipo contrario */
    if(V.no){for(var j=0;j<L.length;j++){var m=(L[j].name||"")+" "+(L[j].voiceURI||"");
      if(!V.no.test(m))return L[j].name||null}}
  }
  return repartir(V);
}
function repartir(V){
  var L=vocesEs();
  if(L.length<2)return null;
  var k=0;
  for(var i=0;i<VOCES.length;i++)if(VOCES[i].id===V.id){k=i;break}
  return L[k%L.length].name||null;
}
/* cuántas voces distintas tiene realmente este teléfono */
function cuantasVoces(){return vocesEs().length}
var VOICES=[];
function loadVoices(){
  try{
    if(CAP.TextToSpeech&&isNative){
      CAP.TextToSpeech.getSupportedVoices().then(function(r){VOICES=(r&&r.voices)||[]}).catch(function(){VOICES=[]});
    }else if(window.speechSynthesis){
      VOICES=speechSynthesis.getVoices()||[];
      speechSynthesis.onvoiceschanged=function(){VOICES=speechSynthesis.getVoices()||[]};
    }
  }catch(e){VOICES=[]}
}
loadVoices();setTimeout(loadVoices,1500);
function vocesEs(){return VOICES.filter(function(v){return /^es/i.test(v.lang||"")})}
function vozSel(){var id=opt("vozId","lily");return VOCES.filter(function(v){return v.id===id})[0]||VOCES[0]}
/* Audios grabados con la voz de Lily (carpeta voz/). Si un archivo no existe, se usa la voz del teléfono. */
const VOZ_RESP={"Inhala":"voz/resp-inhala.mp3","Sostén":"voz/resp-sosten.mp3","Exhala":"voz/resp-exhala.mp3","Pausa":"voz/resp-pausa.mp3"};
const vozFalta={};
let vozEl=null;
function tocarVoz(src){
  if(vozFalta[src])return false;
  try{if(!vozEl){vozEl=new Audio();vozEl.preload="auto"}
    /* no interrumpir el texto guiado si se está leyendo */
    try{if(window.speechSynthesis&&speechSynthesis.speaking)return false}catch(e){}
    vozEl.pause();vozEl.src=src;vozEl.currentTime=0;
    vozEl.onerror=function(){vozFalta[src]=true};
    const p=vozEl.play();if(p&&p.catch)p.catch(function(){});return true}catch(e){return false}
}
window.lfVozLily=function(){return vozSel().id==="lily"&&opt("voice",true)};
function suave(t){return String(t).replace(/[“”"«»]/g,"").replace(/!+/g,".").replace(/\s+/g," ").trim()}
function stopSpeak(){try{CAP.TextToSpeech&&CAP.TextToSpeech.stop()}catch(e){}try{speechSynthesis&&speechSynthesis.cancel()}catch(e){}}
function hablar(text,forzar){
  if(!forzar&&!opt("voice",true))return;
  var clean=suave(text); if(!clean)return;
  var V=vozSel(), nom=opt("vozName","");
  if(!nom)nom=prefiere(V)||"";
  if(CAP.TextToSpeech&&isNative){
    var o={text:clean,lang:"es-MX",rate:V.rate,pitch:V.pitch,volume:1,category:"playback"};
    if(nom){for(var i=0;i<VOICES.length;i++){if((VOICES[i].name||"")===nom){o.voice=i;o.lang=VOICES[i].lang||o.lang;break}}}
    CAP.TextToSpeech.stop().catch(function(){}).then(function(){return CAP.TextToSpeech.speak(o)}).catch(function(){});
    return;
  }
  try{
    var u=new SpeechSynthesisUtterance(clean);
    u.lang="es-MX"; u.rate=V.rate; u.pitch=V.pitch;
    var lista=vocesEs(), pick=null;
    if(nom)pick=lista.filter(function(x){return x.name===nom})[0];
    if(!pick)pick=lista[0];
    if(pick)u.voice=pick;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }catch(e){}
}
function speak(text){return hablar(text,false)}
/* la meditación de entrada usa la misma voz elegida */
window.lfHablar=function(t){hablar(t,true)};
function openVoz(){
  var V=vozSel(), on=opt("voice",true), nom=opt("vozName","");
  var estilos=VOCES.map(function(x){
    return '<button class="btn'+(x.id===V.id?" pri":"")+'" type="button" data-vz="'+x.id+'">'+x.n+'</button>'}).join("");
  var lista=vocesEs();
  var sel=lista.length
    ? '<label class="f full" for="vzDev">Voz instalada en tu teléfono<select id="vzDev">'
      +'<option value="">La que use el sistema</option>'
      +lista.map(function(x){var nm=x.name||"";return '<option value="'+esc(nm)+'"'+(nm===nom?" selected":"")+'>'+esc(nm+(x.lang?" · "+x.lang:""))+'</option>'}).join("")
      +'</select></label>'
    : '<p class="muted">Tu teléfono todavía no reporta voces en español.</p>';
  var n=cuantasVoces();
  var aviso = n<=1
    ? '<p class="muted" style="margin-top:12px;font-size:.84rem;border-top:1px solid var(--line);padding-top:10px">'+
      '<b style="color:var(--oro)">Tu teléfono solo tiene '+(n===1?"una voz":"ninguna voz")+' en español</b>, así que los cuatro estilos suenan a la misma persona con distinto tono. '+
      'Para que suenen diferentes de verdad: Ajustes del teléfono → Accesibilidad → Texto a voz → Google → Instalar datos de voz → Español, y descarga también España, México y Estados Unidos. '+
      'Luego vuelve aquí y aparecerán todas.</p>'
    : '<p class="muted" style="margin-top:12px;font-size:.84rem">Tu teléfono tiene '+n+' voces en español y cada estilo usa una distinta. Si quieres otra combinación, elígela abajo.</p>';
  var o=sheet("xVoz","Voz guiada",
    '<p class="muted">Elige cómo quieres que te acompañen las respiraciones. Prueba cada una y quédate con la que te relaje.</p>'
    +'<div class="row" style="margin:12px 0">'+estilos+'</div>'
    +'<div class="form">'+sel+'</div>'
    +'<div class="row" style="margin-top:12px"><button class="btn pri" type="button" id="vzTest">▸ Probar</button>'
    +'<button class="btn" type="button" id="vzOn">'+(on?"Apagar la voz":"Encender la voz")+'</button></div>'
    +aviso);
  function pinta(){
    var cur=vozSel();
    o.querySelectorAll("[data-vz]").forEach(function(b){b.classList.toggle("pri",b.dataset.vz===cur.id)});
    q(o,"#vzOn").textContent=opt("voice",true)?"Apagar la voz":"Encender la voz";
  }
  o.querySelectorAll("[data-vz]").forEach(function(b){
    b.onclick=function(){setOpt("vozId",b.dataset.vz);pinta();probarVoz()}});
  function probarVoz(){stopSpeak();if(vozSel().id==="lily"){try{speechSynthesis.cancel()}catch(e){}vozFalta["voz/med-02.mp3"]=false;tocarVoz("voz/med-02.mp3");return}
    try{vozEl&&vozEl.pause()}catch(e){}hablar("Inhala despacio. Sostén. Y suelta muy lento. Todo tu cuerpo se relaja.",true)}
  var dev=q(o,"#vzDev");
  if(dev)dev.onchange=function(){setOpt("vozName",dev.value);hablar("Inhala despacio. Y suelta. Estás a salvo.",true)};
  q(o,"#vzTest").onclick=function(){probarVoz()};
  q(o,"#vzOn").onclick=function(){setOpt("voice",!opt("voice",true));if(!opt("voice",true))stopSpeak();pinta();syncToggles();
    toast(opt("voice",true)?"Voz guiada activada 🗣":"Voz guiada apagada")};
  o.hidden=false;
}
/* acceso a la voz desde Mi perfil, porque en la barra no se encuentra */
function cajaVoz(){
  var host=document.querySelector('[data-view="cuenta"]');
  if(!host||document.getElementById("lvBox"))return;
  var d=document.createElement("div");
  d.id="lvBox";
  d.style.cssText="border:1px solid var(--line);border-radius:18px;padding:16px;margin-top:14px";
  function pinta(){
    var V=vozSel(), on=opt("voice",true);
    d.innerHTML='<h3 style="font-size:1.05rem;margin-bottom:4px">🗣 Voz guiada</h3>'+
      '<p class="muted">Quien te acompaña en las respiraciones y en las meditaciones. Ahora: <b style="color:var(--fg)">'+esc(V.n)+'</b>'+(on?"":" · apagada")+'</p>'+
      '<div class="row" style="margin-top:12px"><button class="btn pri" type="button" id="lvGo">Elegir mi voz</button></div>';
    d.querySelector("#lvGo").onclick=function(){openVoz()};
  }
  pinta();
  host.appendChild(d);
  d.addEventListener("click",function(){setTimeout(pinta,600)});
}
if(document.readyState!=="loading")setTimeout(cajaVoz,350);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(cajaVoz,350)});

const _startStep=window.startStep;
if(typeof _startStep==="function")window.startStep=function(i){_startStep(i);const s=cur&&cur.steps[i];if(s&&s.g)setTimeout(()=>{if(playing&&cur&&cur.steps[idx]===s)speak(s.g)},1400)};
const _stop=window.stop;if(typeof _stop==="function")window.stop=function(silent){stopSpeak();return _stop(silent)};

/* ---------- 7. diario y racha ---------- */
const MOODS=["😔","😐","🙂","😊","🤩"];
function diary(){return store.get("lf-diary",[])}
function streak(){const days=new Set([...history.map(h=>today(new Date(h.d))),...diary().map(d=>d.day)]);let n=0;const d=new Date();if(!days.has(today(d)))d.setDate(d.getDate()-1);while(days.has(today(d))){n++;d.setDate(d.getDate()-1)}return n}
const badge=document.createElement("span");badge.className="xstreak";const mb=$("memberBadge");mb&&mb.parentNode.insertBefore(badge,mb);
function renderStreak(){const n=streak();badge.hidden=!n;badge.textContent="🔥 "+n+(n===1?" día":" días")}
function openDiary(){
  let mood=-1;const list=()=>diary().slice(0,12).map(d=>`<div>${MOODS[d.m]||"✿"} <b>${esc(d.day)}</b>${d.t?"<br>"+esc(d.t):""}</div>`).join("")||`<div><small>Aquí verás tus días. Escribe tu primera intención.</small></div>`;
  const o=sheet("xDiary","Mi diario",`<p class="muted">¿Cómo te sientes hoy? Escribe tu intención o lo que notaste en tu sesión. Se guarda solo en tu teléfono.</p>
  <div class="xbig" id="xdS"></div><p class="muted" style="text-align:center;margin-top:-4px">días seguidos cuidándote</p>
  <div class="xmoods">${MOODS.map((m,i)=>`<button type="button" data-mo="${i}" aria-pressed="false">${m}</button>`).join("")}</div>
  <div class="form"><label class="f full" for="xdT">Mi intención · cómo me siento<textarea id="xdT" rows="3" maxlength="500" placeholder="Hoy elijo la calma…"></textarea></label></div>
  <div class="row"><button class="btn pri" type="button" id="xdSave">Guardar</button></div><div class="xlist" id="xdL">${list()}</div>`);
  q(o,"#xdS").textContent=streak();
  q(o,".xmoods").onclick=e=>{const b=e.target.closest("[data-mo]");if(!b)return;mood=+b.dataset.mo;o.querySelectorAll("[data-mo]").forEach(x=>x.setAttribute("aria-pressed",x===b))};
  q(o,"#xdSave").onclick=()=>{const t=q(o,"#xdT").value.trim();if(mood<0&&!t){toast("Elige cómo te sientes o escribe algo");return}
    const d=diary();d.unshift({day:today(),m:mood,t,ts:Date.now()});store.set("lf-diary",d.slice(0,365));q(o,"#xdT").value="";q(o,"#xdL").innerHTML=list();q(o,"#xdS").textContent=streak();renderStreak();toast("Guardado en tu diario ✎")};
  o.hidden=false;
}
const _logDone=window.logDone;if(typeof _logDone==="function")window.logDone=function(){_logDone();renderStreak()};
renderStreak();

/* ---------- 8. programa del día (día universal sin perfil) ---------- */
const _renderProfile=window.renderProfile;
function universalCard(){const el=$("today");if(!el||!el.hidden)return;const t=new Date(),n=reduceN(sumD(t.getFullYear())+sumD(t.getMonth()+1)+sumD(t.getDate()),false),pid=NUM[n][2][t.getDate()%3];
  el.hidden=false;el.innerHTML=`<div class="top"><div class="num">${n}</div><div><b>Tu programa de hoy ✿</b><br><span class="muted">Día universal ${n}: ${DAY[n]}</span></div></div><div class="pchips">${progBtns([pid])}</div><p class="muted">Agrega tu fecha de nacimiento en <a href="#" data-xgo="cuenta">Cuenta</a> para ver tu día personal.</p>`}
if(typeof _renderProfile==="function")window.renderProfile=function(){_renderProfile();try{universalCard()}catch{}};
document.addEventListener("click",e=>{const a=e.target.closest("[data-xgo]");if(!a)return;e.preventDefault();showTab(a.dataset.xgo);scrollTo({top:0})});
try{universalCard()}catch{}

/* ---------- 9. recordatorios ---------- */
function openRemind(){
  const r=opt("remind",null);
  const o=sheet("xRem","Recordatorio diario",`<p class="muted">Te aviso cada día a la hora que elijas para tu momento de calma.</p>
  <div class="form"><label class="f full" for="xrH">Hora<input type="time" id="xrH" value="${r?String(r.h).padStart(2,"0")+":"+String(r.m).padStart(2,"0"):"20:00"}"></label></div>
  <div class="row"><button class="btn pri" type="button" id="xrOn">Activar recordatorio</button><button class="btn" type="button" id="xrOff">Quitar</button></div>
  <p class="muted" id="xrS">${r?"Activo todos los días a las "+String(r.h).padStart(2,"0")+":"+String(r.m).padStart(2,"0"):"Sin recordatorio"}</p>`);
  q(o,"#xrOn").onclick=async()=>{const [h,m]=q(o,"#xrH").value.split(":").map(Number);const LN=CAP.LocalNotifications;
    if(!LN||!isNative){toast("Los recordatorios funcionan en la app instalada");return}
    try{let p=await LN.checkPermissions();if(p.display!=="granted")p=await LN.requestPermissions();if(p.display!=="granted"){toast("Activa las notificaciones de Lily Frequency en Ajustes");return}
      await LN.cancel({notifications:[{id:888}]}).catch(()=>{});
      await LN.schedule({notifications:[{id:888,title:"Lily Frequency ✿",body:"Tu momento de calma te espera. Respira y vibra alto ✦",schedule:{on:{hour:h,minute:m},allowWhileIdle:true}}]});
      setOpt("remind",{h,m});q(o,"#xrS").textContent="Activo todos los días a las "+q(o,"#xrH").value;toast("Recordatorio activado ⏰")}catch(err){toast("No pude activar el recordatorio")}};
  q(o,"#xrOff").onclick=async()=>{try{await CAP.LocalNotifications?.cancel({notifications:[{id:888}]})}catch{}setOpt("remind",null);q(o,"#xrS").textContent="Sin recordatorio";toast("Recordatorio quitado")};
  o.hidden=false;
}

/* ---------- 1. mi pulso con la cámara ---------- */
let pStream=null,pRun=false;
function pulses(){return store.get("lf-pulse",[])}
function openPulse(){
  const o=sheet("xPulse","Mi pulso",`<p class="muted">Cubre por completo la cámara trasera <b>y el flash</b> con la yema de tu dedo índice, sin apretar. Quédate quieta 20 segundos. Mídete antes y después de tu sesión para ver cómo cambia tu ritmo.</p>
  <div class="xbig" id="xpB">–</div><p class="muted" style="text-align:center;margin-top:-4px" id="xpS">latidos por minuto</p>
  <canvas class="xwave" id="xpW" width="600" height="140"></canvas>
  <div class="row"><button class="btn pri" type="button" id="xpGo">Medir mi pulso</button></div>
  <div class="xlist" id="xpL"></div>
  <p class="notice">Es una medición de bienestar, no un instrumento médico. La imagen de la cámara no se guarda ni sale de tu teléfono.</p>
  <video id="xpV" playsinline muted style="display:none"></video>`);
  const listEl=q(o,"#xpL");const renderL=()=>{const L=pulses();listEl.innerHTML=L.slice(0,6).map((p,i)=>{const prev=L[i+1];const diff=prev&&p.ts-prev.ts<3*3600e3?p.bpm-prev.bpm:null;return `<div>♡ <b>${p.bpm} lpm</b> <small>${new Date(p.ts).toLocaleString("es",{dateStyle:"short",timeStyle:"short"})}${diff!==null?` · ${diff<=0?"▼ "+Math.abs(diff)+" más tranquila":"▲ "+diff}`:""}</small></div>`}).join("")};renderL();
  q(o,"#xpGo").onclick=()=>measure(o,renderL);
  o.addEventListener("close",stopCam);o.hidden=false;
}
function stopCam(){pRun=false;try{pStream&&pStream.getTracks().forEach(t=>t.stop())}catch{}pStream=null}
async function measure(o,renderL){
  if(pRun)return;const B=q(o,"#xpB"),S=q(o,"#xpS"),W=q(o,"#xpW"),wg=W.getContext("2d"),v=q(o,"#xpV");
  try{pStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:320},height:{ideal:240}},audio:false})}
  catch(e){toast("Necesito permiso de cámara para medir tu pulso");return}
  const tr=pStream.getVideoTracks()[0];try{await tr.applyConstraints({advanced:[{torch:true}]})}catch{}
  v.srcObject=pStream;await v.play().catch(()=>{});
  const c=document.createElement("canvas");c.width=40;c.height=30;const cg=c.getContext("2d",{willReadFrequently:true});
  const T=[],V=[];const t0=performance.now();pRun=true;B.textContent="…";S.textContent="Midiendo… quédate quieta";
  await new Promise(res=>{const step=()=>{if(!pRun)return res();const now=performance.now();
      try{cg.drawImage(v,0,0,40,30);const d=cg.getImageData(0,0,40,30).data;let r=0,gg=0;for(let i=0;i<d.length;i+=4){r+=d[i];gg+=d[i+1]}r/=d.length/4;gg/=d.length/4;
        const covered=r>90&&r>gg*1.6;if(!covered){S.textContent="Cubre bien la cámara y el flash con tu dedo";T.length=0;V.length=0}else{T.push((now-t0)/1000);V.push(r);S.textContent="Midiendo… "+Math.max(0,Math.ceil(20-(T[T.length-1]-T[0])))+" s"}}catch{}
      drawWave(wg,W,V);if(T.length&&T[T.length-1]-T[0]>=20)return res();if(now-t0>60000)return res();requestAnimationFrame(step)};requestAnimationFrame(step)});
  stopCam();const bpm=calcBpm(T,V);
  if(!bpm){B.textContent="–";S.textContent="No pude leer bien. Prueba otra vez, con el dedo quieto.";return}
  B.textContent=bpm;S.textContent="latidos por minuto";const L=pulses();L.unshift({bpm,ts:Date.now()});store.set("lf-pulse",L.slice(0,60));renderL();buzz(60);
}
function drawWave(g,W,V){g.clearRect(0,0,W.width,W.height);if(V.length<10)return;const s=V.slice(-150),mn=Math.min(...s),mx=Math.max(...s)||1;g.strokeStyle="#c9a7ff";g.lineWidth=3;g.beginPath();s.forEach((x,i)=>{const X=i/(s.length-1)*W.width,Y=W.height-((x-mn)/((mx-mn)||1))*(W.height-20)-10;i?g.lineTo(X,Y):g.moveTo(X,Y)});g.stroke()}
function calcBpm(T,V){if(T.length<120)return 0;
  // remuestreo a 30 Hz
  const fs=30,dur=T[T.length-1]-T[0],n=Math.floor(dur*fs),x=new Float64Array(n);let j=0;
  for(let i=0;i<n;i++){const t=T[0]+i/fs;while(j<T.length-2&&T[j+1]<t)j++;const a=(t-T[j])/((T[j+1]-T[j])||1);x[i]=V[j]+(V[j+1]-V[j])*a}
  // quitar tendencia (media móvil de 1 s) y suavizar
  const w=fs,y=new Float64Array(n);let acc=0;for(let i=0;i<n;i++){acc+=x[i];if(i>=w)acc-=x[i-w];y[i]=x[i]-acc/Math.min(i+1,w)}
  const z=new Float64Array(n);for(let i=2;i<n-2;i++)z[i]=(y[i-2]+y[i-1]+y[i]+y[i+1]+y[i+2])/5;
  // autocorrelación entre 40 y 180 lpm
  let best=0,bl=0;for(let lag=Math.round(fs*60/180);lag<=Math.round(fs*60/40);lag++){let s=0,e1=0,e2=0;for(let i=lag;i<n;i++){s+=z[i]*z[i-lag];e1+=z[i]*z[i];e2+=z[i-lag]*z[i-lag]}const r=s/Math.sqrt(e1*e2||1);if(r>best){best=r;bl=lag}}
  if(best<.3||!bl)return 0;return Math.round(60*fs/bl);
}

/* ---------- arranque ---------- */
document.addEventListener("visibilitychange",()=>{if(document.hidden)stopCam()});
syncToggles();
/* El ambiente ya no se vuelve a encender solo al abrir la app: empieza apagado y se enciende desde «Ambiente». */
if(ambOn()){setOpt("amb",{lluvia:0,mar:0,viento:0,cuencos:0});syncToggles()}

/* ---------- pausa siempre a la mano ---------- */
(function(){
  const st=document.createElement("style");
  st.textContent=".xmini{position:fixed;left:max(14px,env(safe-area-inset-left,0px));bottom:calc(78px + env(safe-area-inset-bottom,0px));z-index:35;"+
    "display:flex;align-items:center;gap:10px;padding:8px 8px 8px 16px;border-radius:999px;background:rgba(29,23,48,.96);border:1px solid rgba(201,167,255,.55);"+
    "box-shadow:0 8px 28px rgba(10,6,20,.55);color:#f4eeff;font-weight:700;font-size:.86rem;max-width:calc(100% - 180px);backdrop-filter:blur(8px)}"+
    ".xmini span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
    ".xmini button{flex:none;border-radius:999px;padding:9px 14px;font-weight:700;background:linear-gradient(90deg,#c9a7ff,#ff9fd2,#8ff0d0);color:#2a1640}"+
    ".xmini[hidden]{display:none!important}";
  document.head.appendChild(st);
  const m=document.createElement("div");m.className="xmini";m.hidden=true;m.setAttribute("role","region");m.setAttribute("aria-label","Sonido");
  m.innerHTML='<span id="xmTx">♪ Sonando</span><button type="button" id="xmBtn">❚❚ Pausar</button>';
  document.body.appendChild(m);
  const tx=q(m,"#xmTx"),bt=q(m,"#xmBtn");
  function estado(){
    let prog=false,pau=false;try{prog=!!playing;pau=!!paused}catch(e){}
    const amb=ambOn(),med=!!document.getElementById("lfMed");
    if(med){m.hidden=true;return}   /* la meditación ya tiene sus propios botones */
    if(prog||amb){m.hidden=false;tx.textContent="♪ "+(prog&&cur?cur.name:"Ambiente");bt.textContent="❚❚ Pausar";bt.dataset.a="pausa"}
    else if(pau&&cur){m.hidden=false;tx.textContent="En pausa · "+cur.name;bt.textContent="▶ Seguir";bt.dataset.a="seguir"}
    else m.hidden=true;
  }
  bt.onclick=function(){
    if(bt.dataset.a==="seguir"){try{play()}catch(e){}}
    else{
      try{if(playing)pause()}catch(e){}
      if(ambOn()){setOpt("amb",{lluvia:0,mar:0,viento:0,cuencos:0});applyAmb();syncToggles()}
      stopSpeak();
    }
    setTimeout(estado,80);
  };
  setInterval(estado,500);estado();
})();
window.LilyX={applyAmb,calcBpm,streak};
})();
