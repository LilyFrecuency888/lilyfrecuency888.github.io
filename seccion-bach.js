/* Lily Frequency · Flores de Bach · los 38 remedios y el de emergencia
   No existe una frecuencia medida de una flor. Cada programa está afinado
   al estado emocional que esa flor atiende en el sistema de Edward Bach. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
function mk(arr){arr.forEach(function(a){
  OUT.push({id:"bach-"+a[0],cat:"Flores de Bach",name:a[1],desc:a[2],
    steps:a[3].split("|").map(function(s){
      var p=s.split(","),f=+p[0],b=+p[1];
      return {f:f,b:b,mode:b>0?"binaural":"pure",dur:+p[2]*60,label:p[3]}})})})}

mk([
/* --- 1 · MIEDO --- */
["rock-rose","Rock Rose · Heliantemo","Para el terror y el pánico. Cuando el miedo paraliza y no deja ni pensar","174,0,4,Suelo|396,8,8,Calmar el pánico|432,9,5,Volver"],
["mimulus","Mimulus · Mímulo","Para los miedos con nombre: hablar en público, la oscuridad, la enfermedad, lo conocido que asusta","396,9,8,Nombrar el miedo|528,10,8,Valor tranquilo"],
["cherry-plum","Cherry Plum · Cerasífera","Para el miedo a perder el control de uno mismo. Cuando sientes que vas a estallar","174,0,5,Contener|396,7,8,Soltar la presión|432,9,6,Centro"],
["aspen","Aspen · Álamo temblón","Para la angustia sin causa conocida. El miedo vago que llega sin motivo","396,7,8,Lo que no tiene nombre|963,7.83,8,Amparo"],
["red-chestnut","Red Chestnut · Castaño rojo","Para el miedo excesivo por los que quieres. La preocupación que no te deja dormir","396,8,6,Soltar el miedo por otro|639,8,10,Querer sin temer"],

/* --- 2 · INCERTIDUMBRE --- */
["cerato","Cerato · Ceratostigma","Para quien no confía en su propio criterio y pregunta a todos antes de decidir","852,7,10,Mi propia voz|528,9,8,Confiar en mí"],
["scleranthus","Scleranthus · Scleranthus","Para la indecisión entre dos opciones. El ir y venir sin poder elegir","432,9,8,Quieto|852,7,8,Saber|432,13,5,Elegir"],
["gentian","Gentian · Genciana","Para el desánimo después de un revés. Cuando un tropiezo te desarma","528,9,8,Levantar|432,12,8,Seguir"],
["gorse","Gorse · Aulaga","Para la desesperanza. Cuando ya no crees que vaya a cambiar nada","396,7,8,Soltar la resignación|963,7,10,Volver a esperar"],
["hornbeam","Hornbeam · Hojarazo","Para el cansancio de solo pensar en la tarea. La fatiga del lunes por la mañana","432,10,5,Despertar|432,16,8,Empezar"],
["wild-oat","Wild Oat · Avena silvestre","Para quien no encuentra su camino. Capaz de todo y sin saber de qué","852,7,10,Escuchar el rumbo|963,7,8,Propósito"],

/* --- 3 · FALTA DE INTERÉS EN EL PRESENTE --- */
["clematis","Clematis · Clemátide","Para quien vive en sus sueños y no aterriza. Distracción y falta de presencia","194.18,10,6,Aterrizar|432,14,8,Aquí"],
["honeysuckle","Honeysuckle · Madreselva","Para quien vive en el pasado. La nostalgia que no deja estar hoy","396,7,8,Soltar el ayer|528,10,8,Hoy"],
["wild-rose","Wild Rose · Rosa silvestre","Para la apatía y la resignación. Cuando te da igual todo","432,12,8,Despertar|528,14,8,Volver a querer"],
["olive","Olive · Olivo","Para el agotamiento total, de cuerpo y de alma, después de un esfuerzo largo","285,7,10,Reparar|174,5,10,Reposo|528,9,6,Recuperar"],
["white-chestnut","White Chestnut · Castaño blanco","Para los pensamientos que dan vueltas y no se callan. La cabeza que no para","432,9,10,Bajar la rumia|136.1,7,10,Silencio"],
["mustard","Mustard · Mostaza","Para la tristeza que llega sin motivo y se va igual. La nube que cae encima","285,8,8,Acompañar|528,10,10,Que entre luz"],
["chestnut-bud","Chestnut Bud · Brote de castaño","Para quien repite el mismo error una y otra vez sin aprender","852,8,8,Ver el patrón|432,14,8,Hacer distinto"],

/* --- 4 · SOLEDAD --- */
["water-violet","Water Violet · Violeta de agua","Para quien se aísla en su orgullo. Independiente de más, solo de más","639,8,10,Dejar entrar|528,9,8,Suavizar"],
["impatiens","Impatiens · Impaciencia","Para la prisa y la irritación con el ritmo de los demás","432,9,8,Bajar el ritmo|136.1,7,8,Paciencia"],
["heather","Heather · Brezo","Para quien no soporta estar solo y habla solo de sí. Necesidad de ser escuchado","639,8,10,Escuchar también|528,9,8,Estar conmigo"],

/* --- 5 · HIPERSENSIBILIDAD --- */
["agrimony","Agrimony · Agrimonia","Para quien esconde su dolor tras una sonrisa. La alegría de fachada","396,7,8,Dejar de fingir|639,8,10,Mostrarme"],
["centaury","Centaury · Centaura","Para quien no sabe decir que no. El que se anula por servir","528,10,8,Mi lugar|741,9,8,Decir que no"],
["walnut","Walnut · Nogal","Para los cambios y las transiciones. Mudanza, duelo, trabajo nuevo, etapa nueva","417,8,10,El cambio|963,7.83,8,Protección en el paso"],
["holly","Holly · Acebo","Para los celos, la envidia y el odio. Las emociones que queman por dentro","396,7,8,Soltar el fuego|639,8,10,Abrir el corazón"],

/* --- 6 · DESALIENTO Y DESESPERACIÓN --- */
["larch","Larch · Alerce","Para la falta de confianza. Quien ni lo intenta porque cree que no puede","528,10,10,Puedo|432,14,8,Intentar"],
["pine","Pine · Pino","Para la culpa. Quien se disculpa por existir y carga faltas que no son suyas","396,7,10,Soltar la culpa|528,9,8,Perdonarme"],
["elm","Elm · Olmo","Para quien se siente abrumado por la responsabilidad. Capaz, pero desbordado","174,0,4,Piso|432,10,8,Respirar|528,12,6,Puedo con esto"],
["sweet-chestnut","Sweet Chestnut · Castaño dulce","Para la angustia extrema. La noche oscura del alma, cuando no queda nada","174,0,6,Sostener|285,6,10,Acompañar|963,7,8,Un hilo de luz"],
["star-of-bethlehem","Star of Bethlehem · Estrella de Belén","Para el golpe y el shock, reciente o antiguo. La noticia que te partió","174,0,5,Contener|285,6,10,Cuidar|528,8,8,Reparar"],
["willow","Willow · Sauce","Para el resentimiento y la amargura. Sentir que la vida fue injusta contigo","396,7,10,Soltar el rencor|639,8,8,Soltar la deuda"],
["oak","Oak · Roble","Para quien sigue y sigue sin descansar. El fuerte que no se permite parar","285,7,10,Permiso de parar|174,5,10,Descansar"],
["crab-apple","Crab Apple · Manzano silvestre","Para el rechazo al propio cuerpo o la sensación de estar sucio. Limpieza y aceptación","285,8,8,Limpiar|528,9,10,Aceptarme"],

/* --- 7 · PREOCUPACIÓN EXCESIVA POR OTROS --- */
["chicory","Chicory · Achicoria","Para el amor posesivo. Quien da esperando y controla con el cariño","639,8,10,Querer sin retener|396,7,6,Soltar"],
["vervain","Vervain · Verbena","Para el entusiasmo que agota. Quien quiere convencer a todos de su causa","432,9,8,Bajar la intensidad|136.1,7,8,Dejar ser"],
["vine","Vine · Vid","Para quien manda y no escucha. Fuerza que se vuelve imposición","639,8,10,Escuchar|528,9,8,Liderar sin imponer"],
["beech","Beech · Haya","Para la crítica constante. Quien ve el defecto antes que la persona","639,8,10,Mirar distinto|528,9,8,Tolerancia"],
["rock-water","Rock Water · Agua de roca","Para la rigidez con uno mismo. La autoexigencia que no perdona nada","396,7,8,Aflojar la exigencia|528,9,10,Ser amable conmigo"],

/* --- EMERGENCIA --- */
["rescate","Rescate · los cinco de emergencia","La combinación clásica: Rock Rose, Impatiens, Clematis, Cherry Plum y Star of Bethlehem. Para la crisis del momento","174,0,4,Piso|396,8,6,Bajar el pánico|285,7,6,Contener|432,9,5,Volver|528,9,4,Estabilizar"]
]);

var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
if(CATS.indexOf("Flores de Bach")<0)CATS.push("Flores de Bach");
})();
