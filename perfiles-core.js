/* Lily Frequency · perfiles
   Debe cargarse ANTES del script principal.
   Redirige los datos personales al perfil activo, sin tocar el resto de la app. */
(function(){
"use strict";
var LS=window.localStorage;
var G=Storage.prototype.getItem,S=Storage.prototype.setItem,R=Storage.prototype.removeItem;
var raw=function(k){try{return G.call(LS,k)}catch(e){return null}};
var put=function(k,v){try{S.call(LS,k,v)}catch(e){}};
/* claves que pertenecen a cada perfil */
var SC=["lf-profile","lf-photo","lf-favs","lf-hist","lf-diary","lf-pulse","lf-my","lf-rx","lf-plan"];

var profs=null;
try{profs=JSON.parse(raw("lf-profiles")||"null")}catch(e){}
if(!profs||!profs.length){
  var id="p1",nombre="";
  try{var old=JSON.parse(raw("lf-profile")||"null");if(old&&old.name)nombre=old.name}catch(e){}
  profs=[{id:id,name:nombre,tipo:"persona"}];
  put("lf-profiles",JSON.stringify(profs));
  put("lf-active",JSON.stringify(id));
  /* conserva lo que ya tenía quien venía de la versión anterior */
  SC.forEach(function(k){var v=raw(k);if(v!==null)put("lf-"+id+"-"+k.slice(3),v)});
}
var act=null;
try{act=JSON.parse(raw("lf-active")||"null")}catch(e){}
if(!act||!profs.some(function(p){return p.id===act})){act=profs[0].id;put("lf-active",JSON.stringify(act))}

var map=function(k){return SC.indexOf(k)>=0?"lf-"+act+"-"+k.slice(3):k};
Storage.prototype.getItem=function(k){return G.call(this,this===LS?map(k):k)};
Storage.prototype.setItem=function(k,v){return S.call(this,this===LS?map(k):k,v)};
Storage.prototype.removeItem=function(k){return R.call(this,this===LS?map(k):k)};

window.LilyP={
  raw:function(k){return raw(k)},
  set:function(k,v){put(k,v)},
  del:function(k){try{R.call(LS,k)}catch(e){}},
  active:function(){return act},
  /* borra todos los datos de un perfil */
  wipe:function(pid){SC.forEach(function(k){try{R.call(LS,"lf-"+pid+"-"+k.slice(3))}catch(e){}})}
};
})();
