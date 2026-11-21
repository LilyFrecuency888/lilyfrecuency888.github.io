/* Lily Frequency · Conexión espiritual, Abundancia, Resiliencia energética,
   ADN y conciencia, y los bioenergéticos que sí van en la app */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].split("|").map(function(s){
    var p=s.split(","),f=+p[0],b=+p[1];
    return {f:f,b:b,mode:b>0?"binaural":"pure",dur:+p[2]*60,label:p[3]}})})})}

/* ============ 16 · CONEXIÓN ESPIRITUAL ============ */
mk("Conexión espiritual",[
["ce-sutil","Equilibrio sutil","El ajuste fino, sin fuerza. Para usar seguido como mantenimiento","963,7.83,10,Campo sutil|432,7.83,10,Asentar"],
["ce-conexion","Conexión espiritual","963 Hz, la frecuencia de lo amplio. Para el silencio y la escucha","963,6,12,Amplitud|963,4,8,Silencio"],
["ce-aurica","Limpieza áurica","Solfeggio descendente alrededor del campo. Para después de un día con mucha gente","963,0,3,Corona|852,0,3,Cabeza|741,0,3,Garganta|639,0,3,Pecho|528,0,3,Centro|417,0,3,Vientre|396,0,4,Pies"],
["ce-alineacion","Alineación energética","Pone los centros en línea, de abajo hacia arriba, sin saltarse ninguno","396,7.83,4,Raíz|528,7.83,4,Plexo|639,7.83,4,Corazón|852,7.83,4,Visión|963,7.83,5,Corona"],
["ce-alta","Frecuencia alta","La más elevada de todas. Poco cuerpo, mucho espacio. Volumen bajo","963,5,18,Frecuencia alta"],
["ce-claridad","Claridad mental espiritual","Cuando pides respuesta y llega ruido. Despeja primero, escucha después","741,7,8,Despejar|852,6,10,Escuchar"],
["ce-corazon","Apertura del corazón","639 Hz sostenido. Para abrir sin exigirte sentir nada en particular","639,7,12,Abrir|528,7,8,Sostener"],
["ce-enraizar","Enraizamiento","396 Hz con el pulso de la Tierra. Para bajar después de meditar o de trabajo energético","396,7.83,8,Raíz|194.18,7.83,8,Tierra"]
]);

/* ============ 17 · ABUNDANCIA Y PROSPERIDAD ============ */
mk("Abundancia",[
["ab-conciencia","Conciencia de abundancia","Cambiar el lente antes de cambiar la cuenta. Para ver lo que ya hay","528,9,10,Ver lo que hay|639,8,8,Agradecer"],
["ab-merecimiento","Merecimiento","Para quien trabaja mucho y recibe poco. El permiso de recibir","396,7,8,Soltar la culpa|528,9,10,Merecer"],
["ab-dinero","Desbloqueo del dinero","Para la incomodidad con el dinero: cobrar, pedir, poner precio","417,8,8,Mover lo trabado|528,9,10,Mi valor"],
["ab-escasez","Soltar creencias de escasez","396 Hz sobre lo heredado: lo que aprendiste en casa sobre el dinero","396,6,12,Lo heredado|528,8,8,Otra historia"],
["ab-prosperidad","Prosperidad financiera","Fondo largo mientras trabajas en tus números o tu negocio","528,10,15,Prosperidad|639,9,10,Flujo"],
["ab-flujo","Flujo de la abundancia","888 Hz, el número del flujo infinito. Dar y recibir en el mismo movimiento","888,8,10,Flujo|528,8,10,Circular"],
["ab-gratitud","Gratitud y recepción","Nombra en voz alta lo que ya llegó. Lo que se agradece se multiplica","528,9,8,Agradecer|639,8,8,Recibir"],
["ab-oportunidades","Oportunidades","Para ver la puerta abierta. Claridad y disposición, no magia","852,8,8,Ver|432,14,8,Moverme"],
["ab-exito","Éxito profesional","Para antes de una presentación, una entrevista o un cierre","528,12,8,Confianza|432,16,8,Presencia"],
["ab-emprender","Emprendimiento","Para los días de montaña rusa del negocio propio. Sostén y foco","396,8,5,Soltar el miedo|528,12,8,Fuerza|432,16,7,Ejecutar"],
["ab-clientes","Atracción de clientes","Lo que atrae es la claridad de lo que ofreces. Trabaja eso","741,9,8,Decir lo que hago|528,10,8,Valor claro|639,9,6,Vínculo"],
["ab-decisiones","Claridad en decisiones","Baja el ruido para que puedas pensar. Antes de decidir algo grande","432,9,6,Bajar el ruido|852,7,8,Escuchar|432,14,6,Decidir"]
]);

/* ============ 18 · RESILIENCIA ENERGÉTICA ============ */
mk("Resiliencia energética",[
["re-enraizar","Enraizamiento profundo","Más abajo que el enraizamiento normal. Para cuando nada te sostiene","174,0,6,Piso|396,7.83,10,Raíz|194.18,7.83,10,Tierra"],
["re-transmutar","Transmutación energética","Para lo denso que ya reconociste. No lo pelea: lo convierte","396,6,10,Reconocer|417,7,8,Mover|528,8,8,Transformar"],
["re-escudo","Escudo áurico","El borde de tu campo. Para antes de entrar a un lugar difícil","963,7.83,8,Borde|396,7.83,6,Base|432,7.83,5,Sellar"],
["re-claridad","Claridad interior","Cuando sabes que algo no está bien pero no sabes qué","741,7,8,Despejar|852,6,10,Ver"],
["re-regeneracion","Regeneración profunda","285 Hz en theta, lenta y larga. Para después de un período de desgaste","285,6,12,Reparar|174,5,12,Profundo"],
["re-ancestral","Fuerza ancestral","Lo que tu linaje también te dio: la capacidad de sostener. 396 en theta","396,5,12,Linaje|528,6,10,Recibir la fuerza"],
["re-bloqueos","Liberación de bloqueos","396 Hz sostenido sobre lo que lleva tiempo atorado","396,6,15,Liberar|417,7,8,Mover"],
["re-coherencia","Coherencia corazón-mente","Que los dos digan lo mismo. Alterna entre 639 y claridad mental","639,7.83,8,Corazón|852,7.83,8,Mente|432,7.83,8,De acuerdo"]
]);

/* ============ 20 · ADN Y ELEVACIÓN DE CONCIENCIA ============ */
mk("Conciencia y linaje",[
["dc-elevacion","Elevación de conciencia","963 Hz sostenido. La sesión de ampliar la mirada","963,6,15,Elevar|963,4,10,Sostener"],
["dc-despertar","Despertar espiritual","852 Hz con theta. Para los momentos en que algo se está moviendo dentro","852,6,12,Despertar|963,6,10,Abrir"],
["dc-pineal","El centro de la cabeza","Atención entre las cejas y hacia adentro, el punto clásico de la meditación. 852 y 963","852,7,10,El espacio|963,6,10,El centro"],
["dc-meditacion","Meditación profunda","Theta 6 Hz limpio, sin voz ni adornos. Para quien ya sabe meditar","432,6,25,Theta"],
["dc-expansion","Expansión de conciencia","Gamma 40 Hz en pulsos. Corta e intensa, no para todos los días","432,40,10,Gamma"],
["dc-yo-superior","Conexión con el yo superior","963 Hz en theta profundo. Pregunta y escucha, sin forzar respuesta","963,5,15,Preguntar|963,4,10,Escuchar"],
["dc-transgeneracional","Paz con el linaje","396 Hz sobre lo heredado. Lo que no era tuyo y lo cargaste igual","396,5,12,Lo heredado|528,6,10,Devolver|639,7,8,Agradecer"],
["dc-luz","Luz interior","La más sencilla: una luz en el centro del pecho que crece despacio","528,7,12,Luz|963,7,10,Expandir"],
["dc-unidad","Unidad con el todo","Para cerrar un proceso. Sin separación, sin esfuerzo","963,7.83,12,Unidad|136.1,7.83,12,Todo"]
]);

/* ============ 13 · BIOENERGÉTICA (lo que sí va en la app) ============ */
mk("Bioenergética",[
["bio-flexibilidad","Flexibilidad","Fondo para estirar. Acompaña cada estiramiento con la exhalación","174,6,6,Soltar|285,8,8,Aflojar|432,9,6,Más espacio"],
["bio-coherencia","Coherencia bioenergética","Que el cuerpo y el sistema nervioso vayan al mismo ritmo. 7.83 Hz, el pulso de la Tierra","136.1,7.83,12,Coherencia|432,7.83,10,Sostener"],
["bio-impulso","Impulso bioenergético","Un empujón de energía sin cafeína. Corta y clara","194.18,14,6,Despertar|432,18,8,Impulso"],
["bio-equilibrio","Equilibrio energético y corporal","La sesión completa: cuerpo, nervios y campo, en orden","128,0,5,Cuerpo|174,7.83,8,Nervios|432,7.83,8,Campo|963,7.83,5,Cerrar"]
]);

/* ---------- registrar y renombrar Planetarias ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);

for(var k=0;k<PROGRAMS.length;k++)if(PROGRAMS[k].cat==="Planetarias")PROGRAMS[k].cat="Planetas";
var ip=CATS.indexOf("Planetarias"); if(ip>=0)CATS[ip]="Planetas";

/* "ADN" en el nombre de una categoría es afirmación genética para Play.
   El manual conserva su nombre; aquí la sección se llama Punto Cero. */
for(var q=0;q<PROGRAMS.length;q++)if(PROGRAMS[q].cat==="ADN Punto Cero")PROGRAMS[q].cat="Punto Cero";
var ia=CATS.indexOf("ADN Punto Cero"); if(ia>=0)CATS[ia]="Punto Cero";

["Conexión espiritual","Abundancia","Resiliencia energética","Conciencia y linaje","Bioenergética"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
