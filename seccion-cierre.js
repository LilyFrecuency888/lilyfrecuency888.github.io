/* Lily Frequency · Tres que faltaban
   Primera sesión, acompañamiento para perros en noche de cohetes, y miedo a volar.
   Ninguno de los tres existía en el catálogo. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Guiadas",[
 ["lf-primera-sesion","Tu primera sesión","Empieza por aquí. Ocho minutos para entender cómo se usa todo lo demás",[
  [432,8,2,"Cómo se usa","Bienvenida. Si tienes audífonos, póntelos: muchos programas mandan un tono distinto a cada oído y así es como funcionan. Si no tienes, también sirve, la app lo convierte en pulsos. Baja el volumen hasta que el sonido te acompañe sin taparte los pensamientos."],
  [432,10,4,"Probar","Esto es todo lo que tienes que hacer: cerrar los ojos y dejarlo sonar. No hay nada que lograr. Si la cabeza se va, se va. Si te duermes, está bien. Nadie lo hace mal."],
  [528,9,2,"Elegir el que sigue","Cuando termine, busca por lo que necesitas hoy, no por lo que suena bonito. Si andas acelerada, Calma. Si no duermes, Sueño. Si quieres entender de qué se trata todo esto, Ondas. Y lo que te sirva, márcalo con el corazón para encontrarlo rápido mañana."]]]
]);

mk("Acompañamiento",[
 ["lf-cohetes-perro","Cohetes y truenos · para tu perro","Noche de cohetes o tormenta. Tono grave y parejo que tapa los golpes secos",[
  [60,0,3,"Antes de empezar","Esto no es para audífonos ni para ti: ponlo en una bocina, en el cuarto donde esté tu perro, a volumen bajo. Deja la puerta abierta para que pueda salir si quiere. No lo encierres y no lo obligues a quedarse. Cierra cortinas, baja las luces y quédate cerca haciendo algo normal: tu calma le dice más que el sonido."],
  [70,0,12,"Fondo parejo",""],
  [60,0,12,"Más grave",""],
  [55,0,8,"Bajando",""],
  [55,0,5,"Después","Si tiembla, se esconde o jadea sin parar aunque el ruido ya pasó, eso no se arregla con sonido: háblalo con tu veterinario antes de la próxima temporada, porque hay cosas que sí le pueden dar."]]]
]);

mk("Fuerza interior",[
 ["lf-miedo-a-volar","Miedo a volar","Para el despegue y para la turbulencia. Veinte minutos, con audífonos, en el asiento",[
  [432,9,3,"Nombrarlo","Tienes miedo de volar. No es tonto y no se te quita porque te digan que es seguro. Vamos a hacer otra cosa: bajarle al cuerpo mientras la cabeza hace lo que quiera."],
  [396,8,5,"El aire primero","Saca todo el aire. Después deja que entre solo. Exhala más largo de lo que inhalas. Esa es toda la técnica y es la que de verdad baja el pulso."],
  [174,7,5,"Los ruidos del avión","Ese ruido al despegar son los flaps acomodándose. El golpe seco es el tren de aterrizaje guardándose. El avión cruje porque está hecho para moverse: uno rígido sería el peligroso. Cada ruido que reconoces es un susto menos."],
  [136.1,6,5,"Turbulencia","Si empieza a moverse, mira a la tripulación en vez de la ventana. Ellos llevan miles de horas de esto. Agárrate del asiento si quieres, pero sigue sacando el aire largo."],
  [528,9,2,"Llegar","Vas a llegar. Y la próxima vez va a costar un poco menos."]]]
]);


/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Guiadas","Acompañamiento","Fuerza interior"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
