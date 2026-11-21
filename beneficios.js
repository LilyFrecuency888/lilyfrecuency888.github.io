/* Lily Frequency · para qué sirve cada programa
   Carga al final. Añade una línea de beneficio a cada tarjeta. */
(function(){
"use strict";
var B={
/* --- Solfeggio --- */
"sol174":"Sensación de suelo firme. Para cuando el cuerpo anda tenso y necesitas sentirte a salvo.",
"sol285":"Acompaña el descanso y la recuperación después de un día exigente.",
"sol396":"Para soltar miedo y culpa vieja, eso que cargas y ya no quieres seguir cargando.",
"sol417":"Mueve lo estancado. Buena para empezar algo nuevo o cerrar un ciclo que se alargó.",
"sol528":"La frecuencia del amor y la reparación. La más usada para poner intención y agradecer.",
"sol639":"Para los vínculos: reconciliar, perdonar, o hablar con alguien desde la calma.",
"sol741":"Limpieza y expresión. Para decir lo que callas y despejar la cabeza.",
"sol852":"Abre la intuición. Úsala para escucharte antes de tomar una decisión.",
"sol963":"Conexión amplia y silencio interior. La más elevada de la escalera Solfeggio.",
"sol-full":"Recorre las nueve frecuencias en orden, de la más grave a la más alta. Ideal para conocerlas todas.",
/* --- Chakras --- */
"chakras":"Sube desde la raíz hasta la corona equilibrando cada centro. Buena para empezar el día centrada.",
"chakras-down":"Baja de la corona a la raíz. Para cerrar el día, aterrizar y dejar el trabajo afuera.",
/* --- Ondas --- */
"schumann":"El pulso natural de la Tierra. Reconecta con un ritmo lento cuando el día viene acelerado.",
"delta":"Las ondas más lentas, las del sueño profundo. Para la noche, no para el día.",
"delta-05":"Delta muy profundo, para noches en que el cuerpo pide descanso completo.",
"theta":"El estado de la meditación y la imaginación. La puerta a lo que está debajo del pensamiento.",
"theta-4":"Theta en el umbral del sueño, donde la mente suelta el control. Para meditaciones hondas.",
"alpha":"Calma despierta: relajada pero presente. El mejor estado para leer, crear o respirar.",
"smr":"Calma con foco. Para trabajar tranquila sin acelerarte.",
"beta":"Mente activa y despierta. Para cuando necesitas rendir y sostener la atención.",
"gamma":"Pulsos rápidos de claridad. Para despabilar la mente cuando está espesa.",
"ondas-tour":"Un viaje completo: te despierta, te calma, te lleva a meditación y te deja al borde del sueño.",
/* --- Mente --- */
"superhumano":"Sesión larga que combina enfoque y expansión. Para días en que quieres rendir y además conectar.",
"recarga":"Impulso de energía mental sin café. Para media mañana o antes de algo importante.",
"vision-remota":"Visualización guiada en theta para ejercitar la percepción fina y la imaginación dirigida.",
"intuicion":"852 Hz sobre theta para afinar la corazonada. Escúchala antes de decidir.",
"enfoque":"Un bloque de trabajo sin distracción. Póntelo y no toques el teléfono hasta que termine.",
"concentracion2":"38 minutos que te llevan de la calma al foco profundo y te devuelven suave. Para estudiar o producir.",
"estudio":"Para aprender y retener. Alfa y beta, la mezcla que sostiene la atención sin tensión.",
"creatividad":"Theta y alfa, donde aparecen las ideas que no salen forzando. Para escribir, diseñar o resolver.",
"claridad":"Despeja la niebla mental. Para cuando tienes mucho en la cabeza y nada en orden.",
"decisiones":"Baja el ruido para que puedas pensar. Úsala antes de una conversación o una elección difícil.",
"lucidos":"Theta justo antes de dormir, el estado donde el sueño se vuelve consciente. Pon intención al acostarte.",
"telepatia":"Meditación para sintonizar con alguien que está lejos. Pensada para enviar presencia y calma.",
/* --- Emociones --- */
"calma":"Para bajar el pulso interno cuando todo va muy rápido. La más pedida del día a día.",
"ansiedad":"Diez minutos para volver al cuerpo cuando la cabeza se dispara. Respira y deja que baje.",
"soltar":"396 Hz en theta para dejar ir: una persona, un enojo, una etapa.",
"autoestima":"Trabaja plexo solar y corazón, el valor propio y la ternura hacia una misma.",
"amor-propio":"528 y 639 juntos. Para tratarte como tratas a quien quieres.",
"perdon":"Para aflojar el nudo con alguien, o contigo misma. No obliga a nada, solo abre espacio.",
"alegria":"Levanta el ánimo sin acelerarte. Buena para días grises.",
"consuelo":"Compañía para los momentos de pérdida. No busca animarte, solo acompañarte.",
"valentia":"Raíz y plexo solar: piso firme y fuerza. Para antes de algo que te da miedo.",
"estres":"El corte entre el trabajo y tu vida. Póntela al llegar a casa.",
"ira":"Baja el cuerpo de la activación a la calma. Para cuando el enojo todavía está caliente.",
/* --- Sueño --- */
"sueno":"Te acompaña de theta a delta hasta que te duermes. Déjala sonando.",
"insomnio":"Para las noches en que no llega el sueño. Larga y muy lenta, sin apuro.",
"siesta":"Veinte minutos: te duerme y te devuelve. Descanso corto sin quedar atontada.",
"despertar":"Sube de delta a alfa poco a poco. Para despertar sin sobresalto.",
"reparador":"Sesión larga de sueño profundo, para noches en que necesitas descansar de verdad.",
/* --- Energía --- */
"energia":"Arranque de mañana. Sube de la calma a la actividad sin golpe.",
"vitalidad":"Plexo solar con ondas activas. Para recuperar las ganas cuando andas apagada.",
"tarde":"Quince minutos contra el bajón de las tres. Mejor que otro café.",
"motivacion":"Para empezar eso que vienes postergando. Ponla y arranca mientras suena.",
"deporte":"Activación antes de entrenar. Sube el ritmo interno y la disposición.",
/* --- Cuerpo --- */
"relax-muscular":"Para soltar hombros, mandíbula y espalda. Acuéstate y deja que el cuerpo afloje.",
"respiracion":"Un pulso lento que guía tu respiración. La base de todo lo demás.",
"post-ejercicio":"Baja pulsaciones y ayuda a que el cuerpo vuelva a su ritmo después de entrenar.",
"cuerpo-calma":"285 y 174 en theta para el cuerpo que viene tenso o cansado.",
"escaneo":"Recorrido guiado por todo el cuerpo, parte por parte. Para reconectar con lo que sientes.",
/* --- Espiritual --- */
"meditacion":"432 Hz en theta. La sesión base para sentarte a meditar, sin más.",
"conexion":"963 Hz, la frecuencia de lo amplio. Para el silencio y la escucha interior.",
"gratitud":"528 y 639 para agradecer de verdad, no de boca. Nombra lo que valoras mientras suena.",
"abund":"Fondo para tus decretos y afirmaciones. Dilos en voz alta mientras suena.",
"proteccion":"Raíz y corona a la vez: piso firme y techo alto. Para antes de sesiones o días densos.",
"limpieza":"Solfeggio descendente, de arriba hacia abajo, para despejar lo que se quedó pegado.",
"hogar":"Pensada para sonar en un parlante y armonizar la casa o el consultorio entre sesiones.",
"ancestros":"Theta profundo con 396 Hz para mirar lo que viene de familia: patrones heredados, cargas que no eran tuyas y lo que quieres cerrar en tu linaje.",
"432":"La afinación natural, más redonda al oído que la estándar. Para escuchar sin hacer nada más.",
"om":"El tono del año terrestre, el que acompaña el canto OM. Grave, constante y muy sostenedor."
};
/* familias generadas: chakras y Solfeggio sueltos */
var FAM={
 "raiz":"Centro de la seguridad y el arraigo. Para cuando te sientes flotando o sin piso.",
 "sacro":"Centro del disfrute y la creatividad. Para reconectar con las ganas.",
 "plexo":"Centro del poder personal. Para sostener tu lugar y decir que no.",
 "corazon":"Centro del amor y la compasión, hacia otros y hacia ti.",
 "garganta":"Centro de la expresión. Para decir lo que no has dicho.",
 "tercer":"Centro de la intuición y la visión interior.",
 "ojo":"Centro de la intuición y la visión interior.",
 "corona":"Centro de la conexión amplia y el silencio."
};
/* ---- planetas: cualidad y lo que sintonizas ---- */
var PL={
"pl-tierra-dia":"Cualidad terrestre: el tono del día de la Tierra. Sintonizas arraigo, presencia en el cuerpo y ganas de hacer. Para empezar el día con los pies en el suelo.",
"pl-sol":"Cualidad solar: centro, identidad y confianza. Sintonizas tu lugar propio, tu brillo y la energía vital que irradias sin esfuerzo.",
"pl-luna":"Cualidad lunar: emoción, ciclos, intuición y descanso. Sintonizas tu mundo interior y lo que de verdad estás sintiendo debajo del ruido.",
"pl-mercurio":"Cualidad mercurial: palabra, pensamiento ágil e intercambio. Sintonizas claridad para hablar, escribir, estudiar y entenderte con otros.",
"pl-venus":"Cualidad de Venus: amor, belleza, placer y valor propio. Sintonizas tu capacidad de atraer, de recibir y de disfrutar sin culpa.",
"pl-marte":"Cualidad marcial: acción, coraje y límites. Sintonizas la fuerza para arrancar lo que postergas y para defender tu espacio sin pelear.",
"pl-jupiter":"Cualidad jupiteriana: expansión, abundancia, fe y generosidad. Sintonizas apertura y la sensación de que cabe más de lo que creías.",
"pl-saturno":"Cualidad saturnina: estructura, madurez y tiempo. Sintonizas disciplina sin dureza y la capacidad de sostener lo que empezaste.",
"pl-urano":"Cualidad uraniana: ruptura, originalidad y libertad. Sintonizas el cambio que venías postergando y la valentía de hacerlo distinto.",
"pl-neptuno":"Cualidad neptuniana: sueño, imaginación, compasión y disolución. Sintonizas lo sutil, lo simbólico y lo que no necesita explicación.",
"pl-pluton":"Cualidad plutoniana: poder profundo, verdad y renacimiento. Sintonizas lo que ya está listo para transformarse, aunque duela soltarlo.",
/* ---- chakras ---- */
"ch-raiz":"Centro de la seguridad y el arraigo. Para cuando te sientes flotando, sin piso o con el cuerpo en alerta.",
"ch-sacro":"Centro del disfrute, la creatividad y el placer. Para reconectar con las ganas cuando todo se volvió obligación.",
"ch-plexo":"Centro del poder personal y la voluntad. Para sostener tu lugar, decidir y poder decir que no.",
"ch-corazon":"Centro del amor y la compasión, hacia otros y hacia ti. Para abrir después de una herida.",
"ch-garganta":"Centro de la expresión y la verdad. Para decir lo que llevas tiempo callando.",
"ch-tercer":"Centro de la intuición y la visión interior. Para ver con claridad lo que ya sabes.",
"ch-corona":"Centro de la conexión amplia y el propósito. Para el silencio y la escucha de algo más grande.",
/* ---- hemisferios ---- */
"hemi-completo":"El sonido cruza de un oído al otro, primero de derecha a izquierda y luego al revés, para que los dos hemisferios trabajen juntos. Necesita audífonos.",
"hemi-der-izq":"El cruce va de lo intuitivo a lo lógico: te ayuda a aterrizar una idea y pasar a la acción. Con audífonos.",
"hemi-izq-der":"El cruce va de lo lógico a lo creativo: para destrabarte cuando llevas rato pensando de más. Con audífonos.",
"hemi-theta":"Alternancia muy lenta en theta, el estado donde trabaja el subconsciente. Para meditación profunda, con audífonos.",
/* ---- diapasones ---- */
"dp-corporales":"La pareja clásica de la terapia de sonido: Do 256 y Sol 384, una quinta justa, uno en cada oído. Es la base de todo el trabajo con diapasones.",
"dp-quinta-larga":"La misma quinta justa durante media hora. Para sesión de camilla o como fondo mientras trabajas.",
"dp-otto128":"El diapasón de cuerpo más usado. Grave y envolvente, se aplica sobre músculo y hueso para tensión y anclaje.",
"dp-otto64":"La mitad del Otto 128. Más profundo: se siente en el cuerpo más de lo que se oye.",
"dp-otto32":"El más grave de la serie Otto. Necesita audífonos buenos o parlante con graves para apreciarlo.",
"dp-otto-serie":"Los tres Otto en orden, de 128 a 64 y a 32, como se usan en una sesión completa de diapasones corporales.",
"dp-angel":"Los tres agudos del set angelical. Muy brillantes y cortantes: se usan alrededor de la cabeza. Pon el volumen bajo.",
"dp-pitagorica":"Los ocho diapasones del set armónico, de 256 a 512 Hz. Recorre la escala completa para encontrar cuál te resuena.",
"dp-om":"El tono del año terrestre, el diapasón más usado para meditar. Grave, constante y muy sostenedor.",
"dp-nervioso":"128 Hz de cuerpo con pulso que baja de alfa a theta. Para después de un día cargado.",
/* ---- subliminales ---- */
"sub-pareja":"Afirmaciones en primera persona sobre 639 Hz, la frecuencia de los vínculos. Escúchalas sin discutirlas.",
"sub-autoconcepto":"Cambia cómo te hablas de ti. Afirmaciones sobre 528 y 396 Hz para la voz que exige y critica.",
"sub-magnetismo":"Presencia y seguridad: ocupar tu espacio sin pedir permiso. Plexo solar con 528 Hz.",
"sub-relaciones":"Para vínculos que quieres cuidar: escuchar, poner límites y soltar la necesidad de tener la razón.",
"sub-merecer":"Para quien da mucho y recibe poco. Trabaja el permiso de recibir sin sentir culpa.",
"sub-dormir":"Las frases entran mientras el cuerpo baja a delta. Ponla y déjala sonando toda la noche."
};
for(var k in PL)B[k]=PL[k];

function ben(id){
  if(!id)return "";
  if(B[id])return B[id];
  if(/^adn\d+$/.test(id))return "Un bloque del decreto de Reprogramación Cuántica del ADN al Punto Cero, sobre 528 Hz en theta. Escúchalo cada noche durante los 21 días.";
  for(var k in FAM){if(id.indexOf(k)===0||id.indexOf("-"+k)>=0)return FAM[k]}
  return "";
}

var st=document.createElement("style");
st.textContent="#lib .card .bn{display:block;font-size:.82rem;line-height:1.45;color:var(--muted);opacity:.95;margin:6px 0 2px;border-top:1px solid var(--line);padding-top:6px}";
document.head.appendChild(st);

/* solo en el programa que está seleccionado */
function pintar(){
  var cards=document.querySelectorAll("#lib .card");
  for(var i=0;i<cards.length;i++){
    var c=cards[i], tiene=c.querySelector(".bn"), act=c.classList.contains("active");
    if(!act){if(tiene)tiene.remove();continue}
    if(tiene)continue;
    var t=ben(c.dataset.id); if(!t)continue;
    var d=c.querySelector(".d"); if(!d)continue;
    var s=document.createElement("span"); s.className="bn"; s.textContent=t;
    d.insertAdjacentElement("afterend",s);
  }
}
var _rl=window.renderLib;
if(typeof _rl==="function"){window.renderLib=function(){var r=_rl.apply(this,arguments);pintar();return r}}
window.LilyBen=ben;
if(document.readyState!=="loading")setTimeout(pintar,200);
else document.addEventListener("DOMContentLoaded",function(){setTimeout(pintar,200)});
})();
