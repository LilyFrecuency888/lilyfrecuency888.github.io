/* Lily Frequency · perfiles, plan asignado y modo terapeuta
   Carga después del script principal y de extras.js */
(function(){
"use strict";
const LP=window.LilyP;
const pget=(k,d)=>{try{const v=LP.raw(k);return v?JSON.parse(v):d}catch{return d}};
const pset=(k,v)=>LP.set(k,JSON.stringify(v));
const profs=()=>pget("lf-profiles",[]);
const actId=()=>LP.active();
const me=()=>profs().find(p=>p.id===actId())||profs()[0]||{id:"p1",name:"",tipo:"persona"};
const cupo=()=>pget("lf-cupo",{personas:1,mascotas:1});
const nCount=t=>profs().filter(p=>p.tipo===t).length;

/* ---------- código de ampliación (mismo método que el código del mes) ---------- */
function cupoCode(n){let h=2166136261;const s=CONFIG.secret+"|cupo|"+n;
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0}
  const A="ABCDEFGHJKMNPQRSTUVWXYZ23456789";let out="";
  for(let i=0;i<6;i++){out+=A[h%A.length];h=Math.floor(h/A.length)^Math.imul(h,2654435761)>>>0;h>>>=0}return out}
const CUPOS=[2,6,11,22,44,66,100];

/* ---------- estilos ---------- */
const css=`
.pstrip{display:flex;gap:10px;overflow-x:auto;padding:10px 0 4px;align-items:flex-start}
.pstrip button{flex:none;display:flex;flex-direction:column;align-items:center;gap:4px;width:66px;background:none;border:0;color:var(--muted);font:600 .72rem Quicksand,inherit;padding:0}
.pstrip .av{width:54px;height:54px;border-radius:50%;border:2px solid var(--line);background:var(--surface2) center/cover no-repeat;display:grid;place-items:center;font-size:1.4rem;overflow:hidden}
.pstrip button.on{color:var(--fg)}
.pstrip button.on .av{border-color:var(--lila);box-shadow:0 0 0 3px color-mix(in srgb,var(--lila) 28%,transparent)}
.pstrip .nm{max-width:66px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pstrip .add .av{border-style:dashed;color:var(--lila)}
.pplan{background:linear-gradient(135deg,rgba(143,240,208,.14),rgba(201,167,255,.10));border:1px solid var(--menta);border-radius:18px;padding:14px;margin-bottom:12px}
.pplan h3{font-size:1rem;margin-bottom:4px}
.pplan .pchips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.passign{position:sticky;top:0;z-index:30;background:var(--lila);color:var(--ink);border-radius:12px;padding:10px 14px;margin:10px 0;font-weight:700;font-size:.88rem;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.passign button{margin-left:auto;background:var(--ink);color:var(--lila);border:0;border-radius:999px;padding:6px 14px;font:700 .82rem Quicksand,inherit}
.card.inplan{border-color:var(--menta);box-shadow:0 0 0 1px var(--menta) inset}
.plist{display:flex;flex-direction:column;gap:6px;margin-top:10px}
.plist .it{display:flex;gap:10px;align-items:center;background:var(--surface2);border:1px solid var(--line);border-radius:14px;padding:8px 10px}
.plist .it .av{width:38px;height:38px;border-radius:50%;background:var(--surface) center/cover no-repeat;display:grid;place-items:center;flex:none;overflow:hidden}
.plist .it .d{flex:1;min-width:0}
.plist .it .d b{display:block;font-size:.92rem}
.plist .it .d span{font-size:.78rem;color:var(--muted)}
.plist .it button{background:none;border:1px solid var(--line);border-radius:999px;color:var(--muted);font:700 .76rem Quicksand,inherit;padding:5px 10px}
`;
const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

function sheet(id,title,html){
  let o=document.getElementById(id);if(o)o.remove();
  o=document.createElement("div");o.className="overlay sheet";o.id=id;
  o.innerHTML=`<div class="box"><button class="btn" type="button" style="align-self:flex-end">Cerrar ✕</button><h2 style="margin:0 0 4px">${title}</h2>${html}</div>`;
  o.querySelector("button").onclick=()=>o.hidden=true;
  document.body.appendChild(o);return o}
const q=(o,s)=>o.querySelector(s);
const ava=p=>p.photo?`style="background-image:url('${p.photo}')"`:"";
const ico=p=>p.photo?"":(p.tipo==="mascota"?"🐾":"✿");

/* ---------- tira de perfiles ---------- */
const strip=document.createElement("div");strip.className="pstrip";strip.setAttribute("aria-label","Perfiles");
const hdr=document.querySelector("header");if(hdr)hdr.insertAdjacentElement("afterend",strip);
function renderStrip(){
  const a=actId();
  strip.innerHTML=profs().map(p=>`<button type="button" data-p="${p.id}" class="${p.id===a?"on":""}"><span class="av" ${ava(p)}>${ico(p)}</span><span class="nm">${esc(p.name||"Sin nombre")}</span></button>`).join("")
   +`<button type="button" data-p="__add" class="add"><span class="av">＋</span><span class="nm">Agregar</span></button>`}
strip.onclick=e=>{const b=e.target.closest("[data-p]");if(!b)return;
  if(b.dataset.p==="__add")return openAdd();
  if(b.dataset.p===actId())return openEdit();
  pset("lf-active",b.dataset.p);location.reload()};
renderStrip();

/* ---------- agregar perfil ---------- */
function openAdd(){
  const c=cupo(),hayP=nCount("persona"),hayM=nCount("mascota");
  if(hayP>=c.personas&&hayM>=c.mascotas)return openCupo();
  const o=sheet("pAdd","Agregar a tu membresía",`
  <p class="muted">Cada quien tiene su foto, sus favoritos, su historial y sus programas asignados. Todo se guarda solo en este teléfono.</p>
  <div class="cats" style="margin-top:10px" id="paTipo">
    <button type="button" data-t="persona" aria-pressed="${hayP<c.personas?"true":"false"}">${hayP<c.personas?"":"🔒 "}Persona</button>
    <button type="button" data-t="mascota" aria-pressed="${hayP<c.personas?"false":"true"}">${hayM<c.mascotas?"":"🔒 "}Mascota</button>
  </div>
  <div class="form" style="margin-top:10px">
    <label class="f full" for="paName">Nombre<input id="paName" type="text" maxlength="40" placeholder="Cómo quieres que le llame"></label>
    <label class="f full" for="paBirth" id="paBirthL">Fecha de nacimiento (opcional)<input id="paBirth" type="date"></label>
    <label class="f full" for="paPhoto">Foto (opcional, queda solo en este teléfono)<input id="paPhoto" type="file" accept="image/*"></label>
  </div>
  <div style="display:flex;align-items:center;gap:10px;margin-top:8px" id="paPrev" hidden><img class="avatar" id="paImg" alt=""><button type="button" class="btn" id="paDel">Quitar foto</button></div>
  <p class="muted" id="paCupo" style="margin-top:10px"></p>
  <div class="row"><button class="btn pri" type="button" id="paSave">Agregar ✿</button></div>`);
  let tipo=hayP<c.personas?"persona":"mascota",photo=null;
  q(o,"#paBirthL").hidden=tipo==="mascota";
  const cupoTxt=()=>q(o,"#paCupo").textContent=`Tu membresía permite ${c.personas} ${c.personas===1?"persona":"personas"} y ${c.mascotas} ${c.mascotas===1?"mascota":"mascotas"}. Ya tienes ${hayP} y ${hayM}.`;
  cupoTxt();
  q(o,"#paTipo").onclick=e=>{const b=e.target.closest("[data-t]");if(!b)return;
    const t=b.dataset.t,cc=cupo();
    if(nCount(t)>=(t==="persona"?cc.personas:cc.mascotas)){o.hidden=true;return openCupo()}
    tipo=t;
    o.querySelectorAll("[data-t]").forEach(x=>x.setAttribute("aria-pressed",x===b));q(o,"#paBirthL").hidden=tipo==="mascota"};
  q(o,"#paPhoto").onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;
    const img=new Image(),url=URL.createObjectURL(f);
    img.onload=()=>{const s=256,cv=document.createElement("canvas");cv.width=cv.height=s;
      const k=Math.max(s/img.width,s/img.height),w=img.width*k,h=img.height*k;
      cv.getContext("2d").drawImage(img,(s-w)/2,(s-h)/2,w,h);photo=cv.toDataURL("image/jpeg",.8);
      URL.revokeObjectURL(url);q(o,"#paPrev").hidden=false;q(o,"#paImg").src=photo};
    img.onerror=()=>toast("No pude leer esa imagen. Prueba con otra.");img.src=url};
  q(o,"#paDel").onclick=()=>{photo=null;q(o,"#paPrev").hidden=true;q(o,"#paPhoto").value=""};
  q(o,"#paSave").onclick=()=>{
    const name=q(o,"#paName").value.trim().slice(0,40);
    if(!name)return toast("Escribe un nombre");
    const cc=cupo();
    if(nCount(tipo)>=(tipo==="persona"?cc.personas:cc.mascotas)){o.hidden=true;return openCupo()}
    const id="p"+Date.now().toString(36),L=profs();
    L.push({id,name,tipo,photo});pset("lf-profiles",L);
    const birth=q(o,"#paBirth").value;
    if(tipo==="persona"&&birth)LP.set("lf-"+id+"-profile",JSON.stringify({name,birth}));
    else LP.set("lf-"+id+"-profile",JSON.stringify({name,birth:""}));
    if(photo)LP.set("lf-"+id+"-photo",JSON.stringify(photo));
    pset("lf-active",id);location.reload()};
  o.hidden=false}

/* ---------- editar o quitar el perfil activo ---------- */
function openEdit(){
  const p=me();
  const o=sheet("pEdit",esc(p.name||"Tu perfil"),`
  <p class="muted">Cambia el nombre o la foto desde la pestaña Cuenta. Aquí puedes quitar este perfil.</p>
  <div class="row"><button class="btn" type="button" id="peGo">Ir a Cuenta</button>
  ${profs().length>1?'<button class="btn" type="button" id="peDel">Quitar este perfil</button>':""}</div>`);
  q(o,"#peGo").onclick=()=>{o.hidden=true;showTab("cuenta");scrollTo({top:0})};
  const d=q(o,"#peDel");
  if(d)d.onclick=()=>{if(!confirm("¿Quitar a "+(p.name||"este perfil")+"? Se borran sus favoritos, su historial y su plan."))return;
    const L=profs().filter(x=>x.id!==p.id);pset("lf-profiles",L);LP.wipe(p.id);pset("lf-active",L[0].id);location.reload()};
  o.hidden=false}

/* ---------- ampliar cupo ---------- */
function openCupo(){
  const o=sheet("pCupo","Agrega a tu familia",`
  <p class="muted">Tu membresía personal incluye tu perfil y una mascota. Para sumar a más personas necesitas el Plan Familia o un familiar adicional.</p>
  <div class="form" style="margin-top:12px"><label class="f full" for="pcCode">Código de ampliación<input id="pcCode" type="text" autocomplete="off" placeholder="6 caracteres" style="text-transform:uppercase;letter-spacing:.15em;font-family:var(--mono)"></label></div>
  <div class="row"><button class="btn pri" type="button" id="pcGo">Activar</button>
  ${CONFIG.whatsapp?`<a class="btn" href="https://wa.me/${esc(CONFIG.whatsapp)}?text=${encodeURIComponent("Hola, quiero agregar a mi familia en Lily Frequency")}" target="_blank" rel="noopener">Pedir mi código</a>`:""}</div>`);
  q(o,"#pcGo").onclick=()=>{const v=q(o,"#pcCode").value.trim().toUpperCase();
    const hit=CUPOS.find(n=>cupoCode(n)===v);
    if(!hit)return toast("Código no válido. Pídeselo a tu terapeuta.");
    pset("lf-cupo",{personas:hit,mascotas:Math.max(hit,2)});toast("Cupo ampliado a "+hit+" personas ✦");o.hidden=true;renderStrip();openAdd()};
  o.hidden=false}

/* ---------- plan asignado ---------- */
const plan=()=>store.get("lf-plan",[]);
const planEl=document.createElement("div");planEl.className="pplan";planEl.hidden=true;
const cats=$("cats");if(cats)cats.parentNode.insertBefore(planEl,cats);
function renderPlan(){
  const ids=plan().filter(id=>PROGRAMS.some(p=>p.id===id));
  if(!ids.length){planEl.hidden=true;return}
  const p=me();
  planEl.hidden=false;
  planEl.innerHTML=`<h3>✦ El plan de ${esc(p.name||"este perfil")}</h3><p class="muted">Los programas que tu terapeuta eligió para ti. Hazlos en orden, uno al día.</p><div class="pchips">${progBtns(ids)}</div>`}

/* ---------- modo asignar (terapeuta) ---------- */
let assign=false;
const banner=document.createElement("div");banner.className="passign";banner.hidden=true;
if(cats)cats.parentNode.insertBefore(banner,planEl);
const _libClick=$("lib").onclick;
$("lib").onclick=e=>{
  if(!assign)return _libClick(e);
  const f=e.target.closest("[data-fav]");if(f)return _libClick(e);
  const c=e.target.closest(".card");if(!c)return;
  const id=c.dataset.id,L=plan(),i=L.indexOf(id);
  if(i>=0){L.splice(i,1);toast("Quitado del plan")}else{L.push(id);toast("Agregado al plan ✦")}
  store.set("lf-plan",L);markPlan();renderPlan()};
function markPlan(){const L=plan();document.querySelectorAll("#lib .card").forEach(c=>c.classList.toggle("inplan",assign&&L.includes(c.dataset.id)))}
function setAssign(v){
  assign=v;banner.hidden=!v;
  if(v){const p=me();banner.innerHTML=`✦ Eligiendo el plan de <b>${esc(p.name||"este perfil")}</b> · toca los programas<button type="button">Listo</button>`;
    banner.querySelector("button").onclick=()=>setAssign(false)}
  markPlan()}

/* ---------- panel de terapeuta: lista de perfiles ---------- */
const panel=$("adminPanel");
if(panel){
  const extra=document.createElement("div");
  extra.innerHTML=`<h3 style="margin-top:22px">Perfiles y planes</h3>
  <p class="muted">Cambia de perfil y elige los programas de cada uno.</p>
  <div class="plist" id="pTList"></div>
  <div class="row"><button class="btn pri" type="button" id="pTAssign">Elegir el plan de este perfil</button></div>
  <h3 style="margin-top:22px">Códigos de ampliación</h3>
  <p class="muted">Entrega uno cuando alguien paga el Plan Familia o una licencia de terapeuta.</p>
  <div class="plist" id="pTCupos"></div>`;
  panel.appendChild(extra);
  const list=()=>{$("pTList").innerHTML=profs().map(p=>`<div class="it"><span class="av" ${ava(p)}>${ico(p)}</span><div class="d"><b>${esc(p.name||"Sin nombre")}</b><span>${p.tipo==="mascota"?"Mascota":"Persona"} · ${pget("lf-"+p.id+"-plan",[]).length} programas${p.id===actId()?" · activo":""}</span></div>${p.id===actId()?"":`<button type="button" data-sw="${p.id}">Abrir</button>`}</div>`).join("");
    $("pTCupos").innerHTML=CUPOS.map(n=>`<div class="it"><div class="d"><b>${n} personas</b><span>${n===2?"Familiar adicional":n===6?"Plan Familia":"Licencia de terapeuta"}</span></div><button type="button" class="code" style="font-family:var(--mono);letter-spacing:.1em">${cupoCode(n)}</button></div>`).join("")};
  list();
  $("pTList").onclick=e=>{const b=e.target.closest("[data-sw]");if(!b)return;pset("lf-active",b.dataset.sw);location.reload()};
  $("pTCupos").onclick=e=>{const b=e.target.closest("button");if(!b)return;copyText(b.textContent.trim(),b)};
  $("pTAssign").onclick=()=>{setAssign(true);showTab("programas");scrollTo({top:0})};
}

/* ---------- enganches ---------- */
const _renderLib=window.renderLib;
if(typeof _renderLib==="function")window.renderLib=function(){_renderLib();markPlan()};
function list2(){const L=$("pTList");if(!L)return;L.innerHTML=profs().map(p=>`<div class="it"><span class="av" ${ava(p)}>${ico(p)}</span><div class="d"><b>${esc(p.name||"Sin nombre")}</b><span>${p.tipo==="mascota"?"Mascota":"Persona"} · ${pget("lf-"+p.id+"-plan",[]).length} programas${p.id===actId()?" · activo":""}</span></div>${p.id===actId()?"":`<button type="button" data-sw="${p.id}">Abrir</button>`}</div>`).join("")}
const _renderMember=window.renderMember;
if(typeof _renderMember==="function")window.renderMember=function(){_renderMember();
  if(!admin&&assign)setAssign(false);
  list2();renderPlan()};

/* el nombre del perfil sigue al que se escribe en Cuenta */
const _pfSave=$("pfSave").onclick;
$("pfSave").onclick=()=>{const n=$("pfName").value.trim().slice(0,40);
  if(n){const L=profs(),i=L.findIndex(x=>x.id===actId());if(i>=0){L[i].name=n;pset("lf-profiles",L)}}
  _pfSave();renderStrip();renderPlan();list2()};
const _photoSet=window.photoSet;
if(typeof _photoSet==="function")window.photoSet=function(){_photoSet();
  const ph=store.get("lf-photo",null),L=profs(),i=L.findIndex(x=>x.id===actId());
  if(i>=0&&L[i].photo!==ph){L[i].photo=ph||null;pset("lf-profiles",L);renderStrip();list2()}};

/* lo que necesita el modo terapeuta, que vive en terapeuta.js */
window.LilyT={setAssign,openCupo,openAdd,renderStrip,renderPlan,markPlan,list2,
  me,profs,actId,cupo,cupoCode,CUPOS,plan,ava,ico,sheet,q,pget,pset,
  esTerapeuta:()=>cupo().personas>=11};

renderPlan();markPlan();
})();
