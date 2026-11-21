/* Lily Frequency · Hemisferios, Diapasones y Subliminales + carga de ADN Punto Cero */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;

var S=function(f,b,mode,min,label,extra){var o={f:f,b:b,mode:mode,dur:min*60,label:label};
  if(extra)for(var k in extra)o[k]=extra[k];return o};
var G=function(min,label,text,br,f,b,mode){return {f:f,b:b,mode:mode||"binaural",dur:min*60,label:label,g:text,br:br}};
var P=function(id,cat,name,desc,st){return {id:id,cat:cat,name:name,desc:desc,steps:st}};
var LR=function(min,label,f,beat,vel,dir){return S(f,beat,"lr",min,label,{lr:vel,dir:dir})};

var NUEVOS=[

/* ================= HEMISFERIOS ================= */
 P("hemi-completo","Hemisferios","Puente entre hemisferios","Con audífonos: el sonido cruza de un oído al otro, primero derecha a izquierda y luego al revés",[
  G(3,"Centrar","Ponte los audífonos. Cierra los ojos. Respira lento y nota cómo el sonido se queda en el centro de tu cabeza.",[4,4,4,4],432,8),
  LR(7,"Derecha → izquierda",432,6,.18,1),
  LR(2,"Pausa al centro",432,6,.02,1),
  LR(7,"Izquierda → derecha",432,6,.18,-1),
  LR(5,"Cruce rápido",432,7,.45,1),
  G(3,"Integrar","Deja que los dos lados se junten. Siente la cabeza entera, de un oído al otro, como un solo espacio.",null,528,7.83)]),

 P("hemi-der-izq","Hemisferios","Derecha a izquierda","De lo intuitivo a lo lógico. Para aterrizar una idea o pasar a la acción",[
  G(2,"Centrar","Audífonos puestos. Respira lento.",[4,4,4,4],432,8),
  LR(12,"Cruce derecha → izquierda",432,6,.15,1),
  G(2,"Cerrar","Abre los ojos despacio y anota lo que apareció.",null,528,10)]),

 P("hemi-izq-der","Hemisferios","Izquierda a derecha","De lo lógico a lo creativo. Para destrabarte cuando estás pensando de más",[
  G(2,"Centrar","Audífonos puestos. Respira lento.",[4,4,4,4],432,8),
  LR(12,"Cruce izquierda → derecha",432,6,.15,-1),
  G(2,"Cerrar","Deja que la idea llegue sola. No la fuerces.",null,528,10)]),

 P("hemi-theta","Hemisferios","Cruce en theta profundo","Alternancia lenta en theta, para meditación y trabajo con el subconsciente",[
  G(3,"Descender","Audífonos. Cierra los ojos y deja que la respiración se alargue sola.",[4,0,8,0],432,8),
  LR(10,"Cruce lento",432,5,.08,1),
  LR(10,"Cruce lento al revés",432,4,.08,-1),
  G(3,"Volver","Vuelve despacio. Mueve los dedos antes de abrir los ojos.",null,432,10)]),

/* ================= DIAPASONES ================= */
 P("dp-corporales","Diapasones","Afinadores corporales · 256 y 384 Hz","La pareja clásica de la terapia de sonido: Do y Sol, una quinta justa, uno en cada oído",[
  S(256,128,"binaural",15,"Quinta justa 256 · 384")]),

 P("dp-quinta-larga","Diapasones","Quinta justa sostenida","La misma quinta, media hora, para sesión de camilla o fondo de trabajo",[
  S(256,128,"binaural",30,"256 y 384 Hz")]),

 P("dp-otto128","Diapasones","Otto 128","El diapasón de cuerpo más usado. Grave y envolvente, para tensión y anclaje",[
  S(128,0,"pure",12,"128 Hz")]),

 P("dp-otto64","Diapasones","Otto 64","La mitad del Otto 128. Más profundo, se siente más que se oye",[
  S(64,0,"pure",12,"64 Hz")]),

 P("dp-otto32","Diapasones","Otto 32","El más grave de los Otto. Necesita audífonos buenos o parlante con graves",[
  S(32,0,"pure",10,"32 Hz")]),

 P("dp-otto-serie","Diapasones","Serie Otto completa","Baja de 128 a 64 y a 32, como se usan los tres diapasones en orden",[
  S(128,0,"pure",6,"Otto 128"),
  S(64,0,"pure",6,"Otto 64"),
  S(32,0,"pure",6,"Otto 32"),
  S(128,0,"pure",3,"Volver a 128")]),

 P("dp-angel","Diapasones","Afinadores ángel · 4096, 4160 y 4225 Hz","Los tres agudos del set angelical. Muy brillantes, pon el volumen bajo",[
  S(4096,0,"pure",4,"4096 Hz · Cristal"),
  S(4160,0,"pure",4,"4160 Hz · Luz"),
  S(4225,0,"pure",4,"4225 Hz · Alma")]),

 P("dp-pitagorica","Diapasones","Escala pitagórica de Do","Los ocho diapasones del set armónico, de 256 a 512 Hz",[
  S(256,0,"pure",2,"Do · 256"),
  S(288,0,"pure",2,"Re · 288"),
  S(320,0,"pure",2,"Mi · 320"),
  S(341.3,0,"pure",2,"Fa · 341.3"),
  S(384,0,"pure",2,"Sol · 384"),
  S(426.7,0,"pure",2,"La · 426.7"),
  S(480,0,"pure",2,"Si · 480"),
  S(512,0,"pure",3,"Do alto · 512")]),

 P("dp-om","Diapasones","Diapasón OM · 136.1 Hz","El tono del año terrestre, el diapasón más usado para meditar",[
  S(136.1,0,"pure",15,"136.1 Hz")]),

 P("dp-nervioso","Diapasones","Pareja para el sistema nervioso","128 Hz de cuerpo con 8 Hz de pulso. Para después de un día cargado",[
  S(128,8,"iso",6,"128 Hz con pulso alfa"),
  S(128,6,"iso",6,"Bajando a theta"),
  S(136.1,0,"pure",4,"Reposo en OM")]),

/* ================= SUBLIMINALES ================= */
 P("sub-pareja","Subliminales","Atraer pareja amorosa","Afirmaciones en primera persona sobre 639 Hz, la frecuencia de los vínculos",[
  G(2,"Preparar","Cierra los ojos. Respira en cuatro tiempos. Deja que cada frase entre sin discutirla.",[4,4,4,4],639,8),
  G(3,"Apertura","Estoy disponible para el amor. Mi corazón está abierto y está seguro. Merezco un amor tranquilo, recíproco y alegre.",null,639,6),
  G(3,"Soltar la herida","Suelto la idea de que amar duele. Amar me expande. Lo que no funcionó antes no define lo que viene.",null,396,6),
  G(3,"Atraer","Atraigo a alguien que me elige con claridad, igual que yo lo elijo. No persigo, no ruego, no me achico.",null,639,6),
  G(3,"Desde mí","Soy buena compañía para mí, y eso me hace buena compañía para otro. Estoy completa antes de que llegue.",null,528,6),
  G(2,"Sellar","Respira hondo. Deja que se asiente.",[4,0,6,0],528,7.83)]),

 P("sub-autoconcepto","Subliminales","Autoconcepto","Cómo te hablas de ti. Afirmaciones sobre 528 y 396 Hz",[
  G(2,"Preparar","Cierra los ojos. Respira lento. Escucha sin corregir nada.",[4,4,4,4],528,8),
  G(3,"Suficiencia","Soy suficiente tal como soy hoy. Mi valor no depende de lo que produzco ni de quién me aprueba.",null,528,6),
  G(3,"Limpiar la crítica","Suelto la voz que me exige ser perfecta. Puedo equivocarme y seguir siendo valiosa.",null,396,6),
  G(3,"Confianza","Confío en mi criterio. Sé lo que necesito y puedo decirlo. Me hablo con respeto, incluso cuando fallo.",null,528,6),
  G(2,"Sellar","Respira hondo. Esto ya es tuyo.",[4,0,6,0],528,7.83)]),

 P("sub-magnetismo","Subliminales","Magnetismo personal","Presencia y seguridad. Plexo solar con 528 Hz",[
  G(2,"Preparar","Siéntate recta. Pies en el suelo. Respira al abdomen.",[4,4,4,4],528,8),
  G(3,"Ocupar espacio","Ocupo mi espacio con calma. No pido permiso para mostrarme. Mi presencia se siente antes de que yo hable.",null,528,6),
  G(3,"Poder propio","Mi energía es mía y la dirijo yo. No necesito gustarle a todos para brillar.",null,417,6),
  G(3,"Atracción","La gente se siente bien cerca de mí porque yo me siento bien conmigo. Lo que es para mí me encuentra.",null,528,6),
  G(2,"Sellar","Respira hondo y abre los ojos cuando quieras.",[4,0,6,0],528,7.83)]),

 P("sub-relaciones","Subliminales","Mejorar relaciones","Para vínculos que quieres cuidar. 639 Hz",[
  G(2,"Preparar","Trae a la mente a la persona. Respira sin apurarte.",[4,4,4,4],639,8),
  G(3,"Escuchar","Escucho sin prepararme para responder. Puedo entender sin estar de acuerdo.",null,639,6),
  G(3,"Límites con amor","Puedo poner un límite y seguir queriendo. Pido lo que necesito con claridad y sin reproche.",null,741,6),
  G(3,"Soltar la razón","Suelto la necesidad de tener la razón. Elijo el vínculo por encima del argumento.",null,639,6),
  G(3,"Dejar ir","Dejo ir con gratitud los vínculos que ya cumplieron su tiempo. Lo que se queda, se queda en paz.",null,396,6),
  G(2,"Sellar","Respira hondo.",[4,0,6,0],528,7.83)]),

 P("sub-merecer","Subliminales","Merecimiento y recibir","Para quien da mucho y recibe poco. 528 Hz",[
  G(2,"Preparar","Manos sobre el pecho. Respira en cuatro tiempos.",[4,4,4,4],528,8),
  G(3,"Recibir","Recibo con la misma facilidad con la que doy. Decir sí a lo bueno no me hace egoísta.",null,528,6),
  G(3,"Sin sufrir","No tengo que sufrir para merecer. No tengo que ganarme el descanso.",null,396,6),
  G(3,"Abundancia","Hay suficiente para mí. Digo sí a lo bueno sin buscarle la trampa.",null,528,6),
  G(2,"Sellar","Respira hondo.",[4,0,6,0],528,7.83)]),

 P("sub-dormir","Subliminales","Afirmaciones para dormir","Las frases entran mientras el cuerpo baja a delta. Déjala sonando",[
  G(3,"Soltar el día","Acuéstate. El día ya terminó. Nada de lo que quedó pendiente se arregla esta noche.",[4,0,8,0],432,8),
  G(5,"Permiso","Me doy permiso de descansar. Mi cuerpo sabe dormir. Suelto el control hasta mañana.",null,432,5),
  G(8,"Descenso","Estoy a salvo. Estoy en mi cama. Todo puede esperar.",null,396,3),
  S(174,2,"binaural",15,"Delta profundo"),
  S(174,1,"binaural",15,"Sueño")])
];

/* ---------- registrar todo ---------- */
var ADN=window.LF_ADN||[];
var todo=ADN.concat(NUEVOS);
var yaHay={};
for(var i=0;i<PROGRAMS.length;i++)yaHay[PROGRAMS[i].id]=1;
for(var j=0;j<todo.length;j++)if(!yaHay[todo[j].id])PROGRAMS.push(todo[j]);

["Hemisferios","Diapasones","Subliminales","ADN Punto Cero"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});

try{if(typeof renderCats==="function")renderCats()}catch(e){}
try{if(typeof renderLib==="function")renderLib()}catch(e){}
})();
