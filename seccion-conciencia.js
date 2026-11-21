/* Lily Frequency · Ondas y conciencia
   Portado de la zona de miembros de la web. Cada paso conserva su texto guiado. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Ondas",[
 ["con-01-delta-profundo","Delta profundo","Para dormir sin despertarte a media noche. Ponla cuando ya estés acostada y déjala correr",[
  [136.1,6,4,"Bajar","Acuéstate y deja de acomodarte. El cuerpo ya está donde tiene que estar. Suelta la mandíbula."],
  [174,4,8,"Soltar el día","No revises el día. Si la cabeza lo trae, dile: mañana. Y vuelve a la respiración."],
  [174,2.5,18,"Descenso","Ya no hay nada que hacer. Deja que el sonido te lleve abajo."],
  [136.1,1.5,15,"Delta",""]]],
 ["con-02-delta-reparador","Delta reparador","Siesta corta cuando el cuerpo está molido pero no hay tiempo de dormir toda la noche",[
  [174,6,3,"Entrar","Veinte minutos bastan si entras completa. Suelta hombros, quijada y manos."],
  [136.1,2,14,"Reparar",""],
  [285,8,3,"Volver","Vuelve despacio. Mueve los dedos antes de abrir los ojos."]]],
 ["con-03-theta-de-entrada","Theta de entrada","El umbral entre despierta y dormida. Es donde aparecen las imágenes que no buscaste",[
  [432,8,3,"Llegar","Siéntate o acuéstate con la espalda larga. Ojos cerrados. Tres respiraciones en cuatro tiempos."],
  [432,6,12,"Theta","Si llegan imágenes, no las persigas ni las empujes. Míralas pasar como quien mira por la ventanilla."],
  [432,6,5,"Sostener",""]]],
 ["con-04-theta-profundo","Theta profundo","Meditación honda de media hora. Para quien ya se sienta a meditar seguido",[
  [136.1,7,4,"Asentar","Postura cómoda que puedas sostener media hora. Ajusta ahora lo que tengas que ajustar."],
  [136.1,4.5,20,"Descender",""],
  [432,9,6,"Volver","Vuelve sin prisa. Primero el sonido del cuarto, después el cuerpo, al final los ojos."]]],
 ["con-05-alfa-sereno","Alfa sereno","Calma estando despierta. Para bajar revoluciones sin quedarte dormida",[
  [432,10,3,"Aterrizar","Siéntate derecha. Esto no es para dormir: es para estar tranquila con los ojos abiertos si quieres."],
  [432,10,14,"Alfa","Respira normal. No hay nada que lograr en los próximos quince minutos."],
  [528,10,3,"Quedarte así","Lleva esta calma al siguiente rato del día."]]],
 ["con-06-alfa-creativo","Alfa creativo","Para cuando estás atorada en algo. El estado donde las ideas se sueltan solas",[
  [432,10,3,"Dejar el problema","Ten el problema presente y después hazte a un lado. No lo resuelvas aquí."],
  [528,8.5,16,"Dejar suelto","Deja que la mente divague. La solución llega de lado, no de frente."],
  [639,10.5,4,"Recoger","Cuando acabe, escribe lo primero que te venga, aunque no tenga que ver."]]],
 ["con-07-beta-de-enfoque","Beta de enfoque","Trabajo sostenido. Ponla de fondo mientras haces la tarea, no antes",[
  [432,12,2,"Empezar","Una sola tarea. Deja el teléfono volteado y lejos."],
  [432,15,20,"Enfoque",""],
  [432,12,3,"Cerrar","Cierra lo que estabas haciendo antes de levantarte."]]],
 ["con-08-beta-alerta","Beta alerta","Despertar mental de quince minutos. Sirve a media tarde, mejor que otro café",[
  [528,14,2,"Despertar","Siéntate derecha. Abre el pecho. Respira más profundo de lo normal."],
  [528,18,11,"Alerta",""],
  [432,14,2,"Estabilizar",""]]],
 ["con-09-gamma-claridad","Gamma: claridad","Presencia aguda. Sesiones cortas, no la pongas de fondo todo el día",[
  [432,10,3,"Preparar","Siéntate derecha, ojos cerrados. Atención en un solo punto: la punta de la nariz o el entrecejo."],
  [432,40,14,"Gamma","Sostén la atención. Cuando se vaya, regrésala sin pelear."],
  [528,10,3,"Soltar","Suelta el punto. Quédate con la claridad."]]],
 ["con-10-la-escalera","La escalera","De beta a delta en treinta y cinco minutos. Para dormir cuando traes la cabeza acelerada",[
  [432,14,4,"Beta","Empezamos donde estás: acelerada. No peleemos con eso."],
  [432,10,7,"Alfa","Ahora bajamos un escalón. Respiración más lenta, exhalación más larga que la inhalación."],
  [136.1,6,10,"Theta","Otro escalón. Aquí ya no hay pensamientos en orden, y está bien."],
  [136.1,2,14,"Delta",""]]],
 ["con-11-delta-para-el-despertar-de-madruga","Delta para el despertar de madrugada","Cuando te despiertas a las tres y ya no puedes volver. Ponla sin encender la luz",[
  [174,5,3,"No pelear","Despertaste. No pelees con eso, pelear despierta más. Quédate acostada y respira."],
  [136.1,3,6,"Bajar otra vez","No tienes que dormirte. Solo descansar. El cuerpo descansa aunque no duermas."],
  [136.1,1.8,16,"Delta",""]]],
 ["con-12-delta-y-cuerpo-adolorido","Delta y cuerpo adolorido","Noche de cuerpo pesado o molido. Delta largo, sin voz después del principio",[
  [174,5,4,"Recorrer","Recorre el cuerpo y nota dónde está apretado. No lo arregles: solo nótalo y suelta el aire ahí."],
  [136.1,2,26,"Delta",""]]],
 ["con-13-siesta-de-veinte","Siesta de veinte","Siesta corta sin quedar atontada. Veinte minutos exactos y vuelta",[
  [174,6,2,"Entrar rápido","Pon alarma por si acaso y olvídate de ella. Suelta."],
  [136.1,2.5,14,"Bajar",""],
  [432,10,4,"Subir","Vuelve. Respira más fuerte, estira, abre los ojos al final."]]],
 ["con-14-delta-puro","Delta puro","Sin voz, sin pasos, cuarenta minutos. Para dejar sonando toda la noche si quieres",[
  [136.1,1.5,40,"Delta",""]]]
]);

mk("Tercer ojo e intuición",[
 ["con-15-luz-en-el-entrecejo","Luz en el entrecejo","El clásico: atención sostenida en el punto entre las cejas. Nada místico, pura concentración",[
  [432,8,3,"Encontrar el punto","Cierra los ojos. Lleva la atención al punto entre las cejas, un poco arriba. No fuerces los ojos hacia allá: solo la atención."],
  [963,6,14,"Sostener","Si aparecen colores o luz, no los persigas. Si no aparece nada, también está bien. Lo que entrenas es sostener, no ver."],
  [432,8,4,"Soltar","Suelta el punto. Siente toda la cara relajada."]]],
 ["con-16-vision-interna","Visión interna","Para el que dice no visualizar nada. Se entrena, como un músculo",[
  [432,8,3,"Empezar fácil","Con los ojos cerrados, imagina algo que conoces de memoria: la puerta de tu casa. No una foto: el color, el picaporte."],
  [528,6,10,"Agregar","Ahora ábrela. Entra. Mira el piso, la luz, el olor del lugar. Si se desarma, vuelve a la puerta."],
  [432,5,5,"Dejar que venga","Ahora no construyas nada. Quédate quieta y mira qué aparece solo."],
  [639,8,3,"Guardar","Antes de abrir los ojos, quédate con una imagen. Escríbela después."]]],
 ["con-17-el-silencio-detras-de-los-ojos","El silencio detrás de los ojos","No es buscar imágenes: es buscar el espacio donde aparecen",[
  [432,7,4,"Ir atrás","Cierra los ojos. En vez de mirar hacia adelante, lleva la atención hacia atrás, al espacio detrás de los ojos."],
  [432,4.5,16,"Quedarse","Quédate ahí. No hay nada que mirar. Esa es la práctica."],
  [432,8,4,"Volver","Regresa trayendo algo de ese silencio contigo."]]],
 ["con-18-la-primera-respuesta","La primera respuesta","Entrenar a escuchar la corazonada antes de que la mente la corrija",[
  [639,9,3,"Bajar al cuerpo","La corazonada no está en la cabeza. Lleva la atención al pecho y al estómago."],
  [528,9,10,"Preguntar","Trae una pregunta de sí o no. Hazla una vez, en silencio, y nota qué pasa en el cuerpo antes de que llegue el razonamiento. El cuerpo contesta primero."],
  [432,10,4,"No discutir","Si la mente ya está justificando la respuesta contraria, nota eso también. Aquí no decides nada: solo observas cuál llegó primero."],
  [639,10,3,"Cerrar","Escribe las dos: la que llegó primero y la que llegó después."]]],
 ["con-19-antes-de-dormir-recordar-suenos","Antes de dormir: recordar sueños","Theta descendente con una intención puesta. Ten cuaderno a un lado de la cama",[
  [432,7,3,"Poner la intención","Acostada, ojos cerrados. Di en silencio tres veces: esta noche recuerdo mis sueños."],
  [136.1,5,10,"Bajar","Deja que la frase se quede sola y suelta. No la repitas más."],
  [136.1,4,12,"Umbral",""],
  [174,2.5,10,"Dormir",""]]],
 ["con-20-intuicion-para-decidir","Intuición para decidir","Cuando tienes dos caminos y los dos se ven razonables",[
  [432,10,3,"Dejar los argumentos","Ya pensaste bastante. Aquí no vamos a pensar más."],
  [528,9,6,"Vivir la primera","Elige el camino A. Imagínate seis meses adentro de esa decisión. No si salió bien: cómo se siente el cuerpo ahí."],
  [528,9,6,"Vivir la segunda","Ahora el camino B. Seis meses adentro. Mismo ejercicio."],
  [639,10,4,"Comparar la sensación","No compares los argumentos. Compara qué sintió el cuerpo en cada uno. Esa diferencia es el dato."]]],
 ["con-21-limpiar-el-canal","Limpiar el canal","Para cuando traes tanto ruido encima que no distingues tu voz de la de los demás",[
  [396,8,4,"Reconocer el ruido","Nota cuántas voces traes: lo que dijeron, lo que opinaron, lo que esperan. No son tuyas."],
  [741,7,8,"Bajarles el volumen","Una por una, bájales el volumen. No las pelees: solo bájalas."],
  [528,6,6,"Encontrar la tuya","Debajo de todas queda una. Más baja, más tranquila, sin urgencia. Esa es."],
  [963,8,3,"Dejarla sonando","Sal con esa puesta."]]]
]);

mk("Viaje interior",[
 ["con-22-el-umbral","El umbral","Primera vez. Veinte minutos para conocer el borde entre despierta y dormida",[
  [432,8,4,"Preparar","Acuéstate boca arriba, con los brazos a los lados. Cuarto oscuro. Audífonos. Que nadie te interrumpa."],
  [136.1,5,12,"Hipnagogia","Vas a llegar a un punto donde el cuerpo se duerme y tú sigues despierta. Si te da un tirón, es normal: vuelve a soltar."],
  [432,9,4,"Regresar","Mueve los dedos de los pies. Después las manos. Al final los ojos."]]],
 ["con-23-viaje-largo","Viaje largo","Cuarenta y cinco minutos. Para cuando tengas la tarde libre y nadie en casa",[
  [432,8,5,"Descender","Sin prisa. Tenemos tiempo."],
  [136.1,6,8,"Primer nivel","Suelta el cuerpo por partes: pies, piernas, cadera, espalda, brazos, cara."],
  [136.1,4.5,22,"Profundo",""],
  [432,8,10,"Subir","Vamos de regreso, despacio."]]],
 ["con-24-disolucion-del-tiempo","Disolución del tiempo","Theta sostenido sin guía. Mucha gente sale creyendo que pasaron diez minutos",[
  [432,7,3,"Entrar","Sin reloj a la vista. Ojos cerrados. Esta no tiene voz: solo sonido."],
  [136.1,4.5,24,"Sostenido",""],
  [432,9,3,"Salir",""]]],
 ["con-25-el-paisaje-interno","El paisaje interno","Con guía. Para quien prefiere tener algo donde apoyarse",[
  [432,7,4,"Bajar","Respira hondo tres veces. Con cada exhalación, baja un escalón."],
  [528,5,6,"Llegar","Estás en un lugar abierto. No lo decidas: mira el que ya está ahí. Nota la luz y la temperatura."],
  [136.1,4.5,10,"Recorrer","Camina. Hay algo en este lugar esperándote. Puede ser una persona, un animal, un objeto. Acércate."],
  [639,5,5,"Preguntar","Pregúntale qué viniste a ver. Escucha sin corregir la respuesta."],
  [432,9,4,"Volver","Agradece. Regresa por donde entraste."]]],
 ["con-26-respiracion-y-descenso","Respiración y descenso","La respiración hace el trabajo, el sonido solo acompaña",[
  [432,8,4,"Cuatro tiempos","Inhala en cuatro, sostén en cuatro, exhala en cuatro, espera en cuatro. Así durante los primeros minutos."],
  [136.1,6,8,"Alargar","Ahora inhala en cuatro y exhala en ocho. La exhalación larga es la que baja el sistema nervioso."],
  [136.1,4.5,10,"Soltar la cuenta","Deja de contar. Respira como salga. Ya estás abajo."],
  [432,9,4,"Subir","Respiraciones más amplias para volver."]]],
 ["con-27-regreso-suave","Regreso suave","Si saliste atontada de una sesión profunda, ponte esta",[
  [136.1,5,4,"Theta","Empezamos donde quedaste."],
  [432,10,5,"Alfa","Subiendo. Respira más fuerte. Mueve los dedos."],
  [432,14,4,"Beta","Estira los brazos. Abre los ojos cuando quieras. Toma agua al terminar."]]],
 ["con-28-integracion","Integración","Después del viaje. Para que lo que viste sirva de algo en la vida de afuera",[
  [432,10,3,"Recoger","Trae a la mente lo que apareció, aunque no lo entiendas."],
  [528,10,8,"Traducir","No busques el significado. Busca una sola cosa que harías distinto mañana por lo que viste."],
  [639,9,4,"Anclar","Escríbela en una frase cuando termine el audio. Una frase, no una página."]]]
]);

mk("Gamma 40 Hz",[
 ["con-29-gamma-de-la-manana","Gamma de la mañana","Veinte minutos al despertar, con los ojos cerrados. Para entrar al día despierta",[
  [432,12,3,"Llegar","Siéntate derecha donde te dé luz natural si se puede. Ojos cerrados."],
  [432,40,15,"Gamma","Atención en un punto. Cuando se vaya, tráela de vuelta. Eso es todo el ejercicio."],
  [528,12,2,"Abrir","Abre los ojos despacio."]]],
 ["con-30-gamma-y-atencion","Gamma y atención","Para antes de algo que pide cabeza clara: una junta, un examen, una conversación difícil",[
  [432,14,2,"Preparar","Diez minutos antes, no dos horas antes."],
  [432,40,10,"Gamma",""],
  [528,14,2,"Salir","Sal directo a lo que vas a hacer."]]],
 ["con-31-gamma-largo","Gamma largo","Cuarenta minutos sostenidos. Es la dosis que usan en los estudios, aunque ellos suman luz",[
  [432,20,4,"Asentar","Postura que aguantes cuarenta minutos. Ajusta ahora."],
  [432,40,34,"Gamma",""],
  [432,12,2,"Cerrar",""]]],
 ["con-32-gamma-y-corazon-abierto","Gamma y corazón abierto","Gamma con práctica de compasión. La combinación que más aparece en meditadores de años",[
  [639,10,3,"Empezar por ti","Mano en el pecho. Deséate a ti misma algo bueno, en silencio. A ti primero, que es lo que cuesta."],
  [528,40,8,"Alguien fácil","Ahora alguien a quien quieres sin esfuerzo. Deséale lo mismo."],
  [528,40,8,"Alguien difícil","Ahora alguien con quien algo quedó roto. No tienes que perdonar: solo desearle que esté bien."],
  [639,10,4,"Todos","Ábrelo a todos, sin nombres. Quédate ahí."]]]
]);

mk("Calma y ánimo",[
 ["con-33-bajar-la-ansiedad-ahora","Bajar la ansiedad ahora","Para el momento en que el pecho va rápido. Doce minutos, donde estés",[
  [432,10,2,"Nombrarlo","Esto es ansiedad. No es peligro. Nómbralo en voz baja: estoy ansiosa, y no me voy a morir de esto."],
  [432,9,6,"Alargar el aire","Inhala en cuatro, exhala en ocho. La exhalación larga es la que le avisa al cuerpo que puede bajar."],
  [528,7,4,"Aterrizar","Cinco cosas que ves, cuatro que oyes, tres que tocas. Despacio."]]],
 ["con-34-cortar-el-pensamiento-que-da-vuelt","Cortar el pensamiento que da vueltas","Para la idea que se repite y no avanza",[
  [432,13,3,"Reconocer","Esto ya lo pensaste hoy. Pensarlo otra vez no lo resuelve."],
  [432,10,8,"Cambiar de carril","Cada vez que vuelva, llévala a la respiración. No la discutas. No ganas discutiendo contigo."],
  [528,9,4,"Dejarla afuera","Imagínala escrita en un papel y déjala sobre la mesa. Ahí va a estar si la necesitas."]]],
 ["con-35-levantar-el-animo","Levantar el ánimo","Para los días en que todo cuesta. No arregla nada, pero mueve el cuerpo un poco",[
  [432,12,3,"Empezar donde estás","No tienes que sentirte bien para hacer esto. Solo respira."],
  [528,15,10,"Subir",""],
  [639,40,5,"Un solo paso","Antes de terminar, piensa una sola cosa pequeña que sí puedes hacer hoy. Una."],
  [528,12,2,"Cerrar","Esa. Ve y hazla."]]],
 ["con-36-calmar-el-enojo","Calmar el enojo","Para cuando ya dijiste algo o estás a punto de decirlo",[
  [396,9,2,"Parar","No contestes todavía. Dos minutos no cambian nada afuera y cambian todo adentro."],
  [432,9,6,"Bajar","Suelta la mandíbula. Suelta los puños. El enojo vive ahí."],
  [528,7,4,"Debajo del enojo","Casi siempre debajo hay otra cosa: miedo, dolor, cansancio. Mira cuál es la tuya hoy."],
  [639,10,3,"Decidir","Ahora sí decide qué vas a decir, desde aquí."]]],
 ["con-37-soltar-el-miedo-de-lo-que-no-ha-pa","Soltar el miedo de lo que no ha pasado","Para la cabeza que ya vivió el desastre tres veces antes de que ocurra",[
  [432,8,3,"Verlo","Lo que temes no está pasando ahora. Ahora estás aquí, sentada, respirando."],
  [136.1,6,10,"Theta","Si la imagen vuelve, déjala pasar sin seguirla. No es profecía: es cansancio con forma de película."],
  [528,8,4,"Volver al presente","Lo único que existe es este rato. Lo demás todavía no."]]],
 ["con-38-salir-del-panico","Salir del pánico","Si ya está subiendo. Corta, con voz todo el tiempo",[
  [432,10,2,"Estás a salvo","Esto pasa. Siempre pasa. Dura y se va. Pon los pies planos en el suelo."],
  [432,10,4,"Respirar primero afuera","Saca el aire primero. Todo. Después deja que entre solo. Otra vez."],
  [528,9,3,"Volver al cuarto","Di en voz alta dónde estás y qué día es. El cuerpo necesita oírlo."],
  [528,8,3,"Aflojar","Ya está bajando. Déjalo bajar."]]],
 ["con-39-estar-con-lo-que-duele","Estar con lo que duele","Duelo. No lo quita y no lo pretende. Solo te acompaña mientras",[
  [396,7,4,"Dejarlo venir","No tienes que estar bien. Hoy no."],
  [136.1,5,14,"Theta",""],
  [432,7,5,"Un poco de aire","Cuando puedas, respira un poco más hondo. Nada más que eso."]]],
 ["con-40-resetear-a-media-jornada","Resetear a media jornada","Doce minutos entre una cosa y otra. Para no llegar a la tarde arrastrando la mañana",[
  [432,10,2,"Cerrar lo anterior","Lo de hoy en la mañana ya pasó. Déjalo en la mañana."],
  [432,10,8,"Alfa",""],
  [528,12,2,"Abrir lo que sigue","Lo que viene empieza ahora, limpio."]]],
 ["con-41-terminar-el-dia","Terminar el día","Para la hora de cerrar, antes de la cama. Beta a alfa a theta",[
  [432,13,3,"Repasar sin juzgar","Pasa el día en tu cabeza sin calificarte. Solo míralo."],
  [432,10,7,"Bajar","Lo que quedó pendiente queda pendiente. Mañana hay día."],
  [136.1,6,8,"Theta",""]]],
 ["con-42-dormir-con-la-cabeza-acelerada","Dormir con la cabeza acelerada","Cuando el cuerpo está cansado pero la cabeza no para",[
  [432,14,4,"Beta","Empezamos donde estás. No te obligues a estar tranquila."],
  [432,10,6,"Alfa","Ahora exhala más largo que inhalas. Nada más."],
  [136.1,6,10,"Theta","Si llegan imágenes raras, vas bien. Así se entra al sueño."],
  [136.1,2,14,"Delta",""]]]
]);

mk("Mente y rendimiento",[
 ["con-43-estudiar-y-retener","Estudiar y retener","Ponla de fondo mientras estudias, no antes. Beta con gamma al final",[
  [432,14,2,"Abrir","Material enfrente, teléfono lejos y volteado."],
  [432,16,22,"Estudiar",""],
  [432,40,5,"Fijar","Ahora cierra el material y repite de memoria lo que puedas. Ahí es donde se fija."]]],
 ["con-44-concentracion-larga","Concentración larga","Para quien se distrae a los diez minutos. Beta sostenido de media hora",[
  [432,14,2,"Una sola cosa","Una tarea. Si se te ocurre otra, anótala en un papel y vuelve."],
  [432,16,26,"Sostener",""],
  [432,12,3,"Cerrar","Deja anotado dónde te quedaste antes de pararte."]]],
 ["con-45-claridad-para-decidir","Claridad para decidir","Diez minutos de gamma antes de decidir algo que importa",[
  [432,12,2,"Dejar de rumiar","Ya le diste vueltas. Esto no es para pensarlo más."],
  [432,40,7,"Gamma",""],
  [528,12,3,"Decidir","Ahora sí. Lo primero que aparezca, anótalo antes de corregirlo."]]],
 ["con-46-presencia-plena","Presencia plena","Veinticinco minutos sin tarea. Solo estar despierta en el momento",[
  [432,10,3,"Llegar","Nada que lograr aquí. Solo estar."],
  [432,40,18,"Gamma","Cuando la mente se vaya, nota que se fue y vuelve. Eso es la práctica, no el silencio."],
  [432,10,4,"Quedarte","Abre los ojos sin salirte del estado."]]],
 ["con-47-memoria-para-nombres-y-datos","Memoria para nombres y datos","Antes de algo donde necesitas acordarte: una reunión, un evento, un repaso",[
  [432,14,2,"Preparar","Ten a la mano lo que necesitas recordar."],
  [432,16,10,"Beta","Repásalo despacio, en voz baja si puedes. Oírlo ayuda más que leerlo."],
  [432,40,4,"Gamma","Ahora de memoria, sin mirar."]]],
 ["con-48-creatividad-dejarlo-suelto","Creatividad: dejarlo suelto","Para destrabar. No pienses el problema aquí, es lo contrario",[
  [432,10,2,"Plantear y soltar","Di el problema una vez y déjalo."],
  [528,8.5,16,"Divagar","Deja que la cabeza se vaya a donde quiera. Aquí no se trabaja."],
  [639,10,4,"Recoger","Escribe lo primero que llegue cuando acabe, aunque parezca que no tiene que ver."]]]
]);


/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Ondas","Tercer ojo e intuición","Viaje interior","Gamma 40 Hz","Calma y ánimo","Mente y rendimiento"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
