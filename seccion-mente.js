/* Lily Frequency · Equilibrio energético, Aprendizaje y memoria,
   Cuerpo y rendimiento, Equilibrio mental */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* "f,pulso,minutos,etiqueta" separado por | ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].split("|").map(function(s){
    var p=s.split(","),f=+p[0],b=+p[1];
    return {f:f,b:b,mode:b>0?"binaural":"pure",dur:+p[2]*60,label:p[3]}})})})}

/* ============ 1 · EQUILIBRIO ENERGÉTICO ============ */
mk("Equilibrio energético",[
["eqe-base","Equilibrio base","La sesión diaria de mantenimiento. Baja el ruido y deja el sistema centrado","432,10,5,Llegar|136.1,7.83,10,Centro|432,8,5,Asentar"],
["eqe-limpieza","Limpieza energética","Solfeggio de arriba hacia abajo para despejar lo que se quedó pegado del día","963,0,3,Corona|852,0,3,Tercer ojo|741,0,3,Garganta|639,0,3,Corazón|528,0,3,Plexo|417,0,3,Sacro|396,0,4,Raíz"],
["eqe-centrar","Centrarse en 5 minutos","Lo mínimo para volver a ti cuando el día te sacó de eje","136.1,7.83,5,Centro"],
["eqe-reset","Reinicio energético","Cuando sientes que arrastras algo y no sabes qué. Sube de lo denso a lo sutil","174,0,4,Suelo|285,0,4,Restaurar|396,6,6,Soltar|528,6,6,Integrar"],
["eqe-armonia","Armonía general","Fondo largo y parejo para el día. Puedes dejarla sonando mientras haces otra cosa","432,8,10,Armonía|528,8,10,Coherencia"],
["eqe-cierre","Cierre del día","De lo activo a lo quieto. Para marcar el final de la jornada","396,10,4,Soltar el día|285,6,6,Bajar|174,4,6,Reposo"],
["eqe-manana","Apertura de la mañana","Abre el sistema sin acelerarlo. Antes del primer café","194.18,10,5,Arraigo|528,12,8,Abrir"],
["eqe-escudo-dia","Equilibrio con protección","Raíz firme y corona abierta a la vez. Antes de un día denso o de dar sesiones","396,7.83,6,Raíz|963,7.83,6,Corona|432,7.83,5,Unir"]
]);

/* ============ 2 · APRENDIZAJE Y MEMORIA ============ */
mk("Aprendizaje y memoria",[
["apr-sist","Aprendizaje · de fondo","Sesión larga de 30 min para días de estudio. Sube de la calma al foco y baja al final","432,10,8,Calma alerta|432,13,10,Atención sostenida|432,16,8,Foco|432,10,4,Cerrar"],
["apr-agudo","Aprendizaje · inmediato","12 min antes de ponerte a estudiar. Entra rápido al estado de aprender","432,10,4,Entrar|432,14,8,Aprender"],
["apr-memoria","Memoria","Gamma 40 Hz para fijar lo estudiado. Úsala justo después de repasar, no antes","432,10,4,Asentar|432,40,8,Gamma|432,7,6,Consolidar"],
["apr-conc-sist","Concentración · de fondo","Bloque de 40 min de trabajo profundo. Ponla y no toques el teléfono","432,10,5,Entrar|432,13,12,SMR|432,16,12,Beta|432,18,8,Foco alto|432,10,3,Salir"],
["apr-conc-agudo","Concentración · inmediato","10 min para recuperar la atención cuando se te dispersó","432,13,4,Recoger|432,18,6,Enfocar"],
["apr-examen-sist","Examen · de fondo","Para los días previos. Calma la anticipación y deja la mente disponible","396,10,6,Soltar el nervio|432,8,8,Calma|432,14,10,Repasar|528,10,4,Confianza"],
["apr-examen-agudo","Examen · inmediato","8 min justo antes de entrar. Baja el pulso y sube la claridad","396,10,3,Respirar|432,16,5,Claridad"],
["apr-estres-sist","Estrés de estudio · de fondo","Cuando llevas semanas cargada. Sesión larga que desarma la tensión acumulada","174,0,5,Suelo|285,6,8,Soltar|396,6,8,Liberar|432,10,6,Calma|528,8,5,Reparar"],
["apr-estres-agudo","Estrés de estudio · inmediato","6 min de emergencia cuando te bloqueaste a media tarea","396,10,3,Bajar|432,8,3,Volver"]
]);

/* ============ 3 · CUERPO Y RENDIMIENTO ============ */
mk("Cuerpo y vitalidad",[
["cpo-musculo","Músculo","Antes o después de entrenar. Acompaña el trabajo muscular con pulso de cuerpo","128,0,5,Tono de cuerpo|285,8,8,Recuperar|174,6,5,Soltar"],
["cpo-rendimiento","Rendimiento","Activación para competir o rendir. Beta alto con base de tierra","194.18,14,6,Despertar|432,18,10,Rendir|432,20,5,Pico"],
["cpo-fuerza","Fuerza","Raíz y plexo solar. Para antes de levantar peso o de una exigencia física","396,12,6,Raíz|528,16,8,Plexo"],
["cpo-aguante","Aguante","Sesión larga y pareja para resistencia. Fondo estable sin picos","194.18,12,15,Constancia|432,14,15,Sostener"],
["cpo-regeneracion","Regeneración","Después del esfuerzo. Baja el cuerpo a theta para que descanse de verdad","285,8,8,Reparar|174,6,10,Profundo|136.1,4,7,Reposo"],
["cpo-relax-profunda","Relajación profunda","Veinticinco minutos para soltar el cuerpo entero, de la mandíbula a los pies","432,10,5,Llegar|432,7,10,Soltar|174,5,10,Profundo"],
["cpo-movimiento","Movimiento y constancia","Para los días en que no te quieres mover. No te empuja: te acompaña a empezar","528,12,6,Ganas|432,16,8,Arrancar"],
["cpo-manos","Manos y trabajo corporal","Para terapeutas: fondo mientras das masaje o terapia manual. Ponla en parlante","136.1,7.83,20,Fondo de sesión"]
]);

/* ============ 4 · EQUILIBRIO MENTAL ============ */
mk("Equilibrio mental",[
["eqm-activacion","Activación","Para arrancar la mente sin café. Sube de alfa a beta en diez minutos","432,10,4,Despertar|432,16,6,Activar"],
["eqm-positivos","Pensamientos positivos","No fuerza el optimismo: baja la rumia para que haya espacio a otra cosa","396,8,6,Bajar la rumia|528,10,8,Abrir|639,10,5,Amabilidad"],
["eqm-nervios","Equilibrio de los nervios","Cuando el cuerpo está en alerta sin motivo claro. Alfa-theta largo","432,10,8,Calmar|432,7,10,Asentar|174,5,5,Suelo"],
["eqm-fatiga","Fatiga","Para el cansancio que no se quita durmiendo. Sube despacio, sin exigirle al cuerpo","285,8,6,Reparar|432,10,8,Despertar suave|432,14,5,Volver"],
["eqm-agot-sist","Agotamiento · de fondo","Sesión larga para cuando llevas meses al límite. 35 min, sin picos","174,0,6,Suelo|285,6,8,Reparar|396,6,8,Soltar|432,8,8,Calma|528,8,5,Recuperar"],
["eqm-agot-agudo","Agotamiento · inmediato","Diez minutos para el bajón fuerte de media tarde","285,8,4,Reparar|432,10,6,Volver"],
["eqm-estres-extremo","Estrés extremo","Para los días en que todo es demasiado. Muy lenta, muy grave, sin estímulo","174,0,6,Piso|174,4,10,Respirar|136.1,4,9,Quieto"],
["eqm-sueno-sist","Sueño · de fondo","Programa de la semana para recuperar el ritmo del sueño. Ponla una hora antes de dormir","432,8,8,Bajar el día|396,6,10,Soltar|174,4,10,Theta|174,2,10,Delta"],
["eqm-reposo","Reposo en cama","Para los días de cama: convalecencia, dolor o cansancio. Larga y sin exigencia","285,6,12,Reparar|174,4,12,Reposo|136.1,3,11,Quietud"],
["eqm-flujo","Flujo equilibrado","Ni acelerada ni apagada. El punto medio para trabajar horas sin quemarte","432,11,15,Flujo|432,12,15,Sostener"],
["eqm-profundo","Sueño profundo","Delta largo para la noche entera. Déjala sonando con el volumen bajo","174,3,10,Entrar|174,2,20,Delta|174,1,20,Profundo"]
]);

/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Equilibrio energético","Aprendizaje y memoria","Cuerpo y vitalidad","Equilibrio mental"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
