/* Lily Frequency · Amor y relaciones
   Portado de la zona de miembros de la web. Cada paso conserva su texto guiado. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Mantras de atracción",[
 ["amor-kleem-108","Kleem · 108 repeticiones","El bija mantra raíz de la atracción magnética en la tradición tántrica. Se repite 108 veces, la mala completa. Veinte minutos sobre el tono de Venus.",[
   [221.23,8,3,"Llegar","Siéntate con la espalda recta. Se pronuncia “Klim”, como “cream” en inglés pero con K. Una sílaba corta, limpia, sin arrastrarla."],
   [221.23,6,12,"Kleem ×108","Empieza. Klim… Klim… Klim… Un Kleem por cada respiración, sin apurarte. Si llevas mala, una cuenta por repetición. Si pierdes el número, sigue: la cuenta importa menos que el ritmo."],
   [639,7,5,"Asentar","Deja de repetir y quédate en silencio. Esta parte no la saltes: el mantra trabaja en el silencio que viene después. Repite una sola vez por dentro: “Soy magnética por lo que soy, no por lo que me falta.”"]
 ]],
 ["amor-kleem-corto","Kleem · 11 minutos","La versión diaria: 54 repeticiones, media mala. Para los días con prisa, que son casi todos.",[
   [221.23,8,2,"Entrar","Dos respiraciones largas y arrancas. No necesitas estar en calma para empezar."],
   [221.23,6,7,"Kleem ×54","Klim… Klim… Klim… Si la mente se va a la lista del día, vuelve a la sílaba. Irse y volver es la práctica, no el error."],
   [639,8,2,"Cerrar","Silencio. Mano en el pecho si quieres. Listo. Repite: “Hoy también me elijo.”"]
 ]],
 ["amor-shreem","Om Shreem Mahalakshmiyei Namaha","Lakshmi no es solo dinero: es belleza, plenitud y vida en pareja. Este es para la carencia afectiva, para la sensación de que el amor no alcanza o hay que competir por él.",[
   [528,8,3,"Llegar","Om Shreem Mahalakshmiyei Namaha. Dilo despacio tres veces en voz alta para que la boca le agarre la forma antes de empezar."],
   [528,6,10,"Invocar","Repite el mantra completo, una vez por exhalación, sin prisa. Mientras lo dices, piensa en abundancia afectiva: gente que te quiere bien y no se agota."],
   [639,7,4,"Recibir","Calla y recibe. Si se te viene a la mente alguien a quien le sobra amor para ti, quédate ahí. Repite: “Hay suficiente amor. No tengo que competir por él.”"]
 ]],
 ["amor-aham-prema","Aham Prema · Yo soy amor divino","El giro completo: de buscar amor afuera a irradiarlo. Es el que cambia quién sintoniza contigo, porque cambia desde dónde te paras.",[
   [639,8,3,"Entrar","Aham Prema. Dos palabras: “a-jam pre-ma”. Significa yo soy amor divino. No lo pidas: afírmalo."],
   [528,6,9,"Irradiar","Aham Prema… Aham Prema… Al decirlo, imagina que el pecho emite luz hacia afuera en todas direcciones. No estás jalando nada hacia ti. Estás emitiendo."],
   [639,10,3,"Salir","Abre los ojos despacio. Sal del programa irradiando, no buscando. Así se nota distinto en la mirada y en el cuerpo."]
 ]]
]);

mk("Venus y planetarias",[
 ["amor-venus","Venus · 221.23 Hz","El tono de la órbita de Venus según el cálculo de Hans Cousto. Sensualidad, belleza y romance terrenal: este no es espiritual, es del cuerpo.",[
   [221.23,9,3,"Entrar","Suelta los hombros y la mandíbula. Este programa no pide esfuerzo, pide gusto."],
   [221.23,7,10,"Habitar","Recorre tu cuerpo despacio y busca una parte que te guste. Una sola. Quédate ahí sin corregir nada, sin el “pero”. El erotismo empieza en habitarse, no en gustarle a alguien."],
   [221.23,8,4,"Llevarlo","Decide una cosa pequeña y sensorial para hoy: la ropa que te gusta, un aroma, caminar más despacio. Algo del cuerpo, no de la cabeza. Repite: “Habito mi cuerpo con gusto.”"]
 ]],
 ["amor-venus-luna","Venus y Luna","221.23 con 210.42, el tono lunar. Venus atrae y la Luna recibe. Este es para cuando te cuesta dejarte querer sin devolver el favor de inmediato.",[
   [210.42,9,3,"Abrir","Palmas hacia arriba sobre las piernas. Es un gesto chiquito y cambia algo: el cuerpo en posición de recibir."],
   [221.23,6,9,"Recibir","Acuérdate de la última vez que alguien te dio algo y lo primero que pensaste fue cómo pagarlo. Vuelve a ese momento y esta vez solo di gracias. Nada más."],
   [210.42,8,4,"Sostener","Repite: “Puedo recibir sin tener que devolver de inmediato.” Si te incomoda, es el programa correcto."]
 ]],
 ["amor-venus-tierra","Venus en tierra","221.23 sobre 194.18, el tono de la Tierra. Para que el romance aterrice en algo real y sostenible, no en una historia bonita que no camina.",[
   [194.18,9,3,"Pisar","Pies planos en el piso. Siente el peso. Lo que no se sostiene en lo cotidiano no se sostiene."],
   [221.23,7,8,"Imaginar lo real","No imagines la boda. Imagina un martes: desayuno, quién lava, cómo se hablan cuando están cansados. Si eso te gusta, eso es lo que quieres atraer."],
   [194.18,8,5,"Aterrizar","Nombra una señal concreta que te diría que alguien es para lo cotidiano y no solo para la emoción. Guárdala. Te va a servir más que una lista de cualidades. Repite: “Quiero algo que se sostenga en lo cotidiano.”"]
 ]]
]);

mk("Theta y creencias",[
 ["amor-miedo-intimidad","Miedo a la intimidad","Para la parte de ti que quiere cercanía y al mismo tiempo la esquiva. Theta sobre 639: con audífonos, sin excepción.",[
   [639,8,3,"Llegar","Ponte los audífonos. Sin ellos este programa no hace lo que tiene que hacer. Respira lento hasta que el cuerpo se afloje."],
   [639,4.5,12,"Theta","Acuérdate de un momento en que alguien se acercó de más y quisiste salir corriendo. No lo analices: quédate en la sensación del cuerpo. Ahora, sin soltar esa sensación, mírate hoy: estás aquí, entera, y eso ya pasó. Las dos cosas a la vez."],
   [639,7,4,"Volver","Repite despacio: “Estoy a salvo siendo vista de cerca.” Si una parte de ti dice que no, dile que entiende bien de dónde viene, y repítelo otra vez."]
 ]],
 ["amor-rechazo","El miedo al rechazo","Para antes de escribirle, de invitarlo, de decir lo que sientes. Baja la carga de un posible no.",[
   [639,8,3,"Llegar","Con audífonos. Trae a la mente lo que no te atreves a decir o a preguntar."],
   [639,6,10,"Theta","Imagina que lo dices y te dicen no. Quédate en el no. Siente dónde pega. Ahora quédate ahí hasta que se note que sigues respirando, que sigues siendo tú, que la vida no se acabó. El no se puede sostener."],
   [528,7,4,"Cerrar","Repite: “Un no de alguien no es un no de la vida.” Y decide si lo vas a decir hoy."]
 ]],
 ["amor-merecer","Merecer amor","El más importante del grupo. Para la creencia de que el amor se gana portándose bien, dando de más o siendo útil.",[
   [528,8,3,"Llegar","Con audífonos. Respira hasta que el cuerpo pese un poco más sobre la silla."],
   [528,6.3,12,"Theta","Pregúntate: ¿qué tengo que hacer para que me quieran? Deja que salga la respuesta de verdad, la que te enseñaron de niña. Ahora busca un recuerdo, uno solo, en que alguien te quiso sin que hicieras nada por ganártelo. Existe. Quédate ahí."],
   [528,7,5,"Grabarlo","Repite despacio, muchas veces: “Merezco amor sin tener que ganármelo.” Esta es la frase del grupo. Si solo haces un programa de todos estos, haz este."]
 ]],
 ["amor-soltar-anterior","Soltar al anterior","No se puede atraer con la mano ocupada. Este corta el hilo con quien ya no está, sin pelea y sin resentimiento.",[
   [396,8,4,"Nombrar","Con audífonos. Dilo por dentro: su nombre, y qué quedó pendiente. No lo adornes."],
   [396,5,8,"Soltar","Imagina un hilo entre tu pecho y el suyo. Míralo bien, de qué color es, qué grosor tiene. Al exhalar, córtalo. No lo jales: córtalo y deja que el extremo se vaya."],
   [639,7,7,"Devolver y cerrar","Dale las gracias por lo que sí te dio y quédate con el aprendizaje, no con la cuenta pendiente. Repite: “Lo que fue, fue. Lo dejo completo y me voy.”"]
 ]],
 ["amor-celos","Celos y comparación","Para cuando ves la vida de otros y te duele, o cuando la cabeza se va a inventar escenas. Baja el cortisol antes de que hagas algo de lo que te arrepientas.",[
   [417,9,3,"Parar","Primero para el cuerpo, después la cabeza. Respira largo. No tomes ninguna decisión ni escribas nada en estos minutos."],
   [396,6,9,"Mirar debajo","Debajo de los celos casi siempre hay miedo de no ser suficiente. Busca ese miedo y nómbralo. Es más fácil de sostener que los celos, porque es verdad."],
   [639,8,4,"Volver a ti","Repite: “Nadie me quita lo que es mío.” Y trae una cosa tuya, concreta, que nadie más tiene."]
 ]]
]);

mk("Tu propia voz",[
 ["amor-aaah","AAAH · abrir el pecho","Una vocal abierta y sostenida sobre un tono que puedes igualar con tu voz. Lo más físico del grupo: vibra el esternón desde adentro.",[
   [216,0,2,"Escuchar","Escucha el tono sin cantar. Es un La bajo. Si te queda muy grave para tu voz, canta la misma nota una octava arriba: suena igual de bien."],
   [216,0,8,"Entonar","Inhala y suelta una “aaah” abierta y larga sobre el tono, hasta que se te acabe el aire. Mandíbula suelta, sin forzar la garganta. Pon la mano en el esternón: vas a sentir la vibración en la palma. Cada exhalación es una “aaah”."],
   [216,0,3,"Silencio","Deja de cantar y quédate quieta. El pecho sigue vibrando un rato. Ahí es donde pasa. Repite: “Mi pecho se abre. Lo que siento tiene lugar.”"]
 ]],
 ["amor-yam","YAM · la sílaba del corazón","La sílaba semilla del chakra del corazón en la tradición védica. Aquí va en un tono cómodo para tu voz, no en el tradicional, para que puedas sostenerla sin apretar.",[
   [288,0,2,"Afinar","Escucha e iguala el tono con un “mmm” suave antes de abrir a la sílaba."],
   [288,0,9,"YAM","“Iaaaam”. Abre con la Y y cierra con la M larga, zumbando. La M es la mitad del trabajo: ahí vibra el paladar y el pecho a la vez. Una por exhalación."],
   [216,0,3,"Bajar","El tono bajó. Ya no cantes: respira y deja que el cuerpo se acomode al silencio. Repite: “YAM. Mi corazón tiene su propio sonido.”"]
 ]],
 ["amor-bhramari","Bhramari · zumbido de abeja","Labios cerrados y un zumbido largo en cada exhalación. De todo el grupo, este es el que tiene más respaldo medido: la exhalación lenta con zumbido sube el tono parasimpático y relaja la mandíbula.",[
   [136.1,0,2,"Escuchar","Tono bajo. Siéntate recto, ojos cerrados, labios juntos sin apretar."],
   [136.1,0,10,"Zumbar","Inhala por la nariz y exhala zumbando: mmmmmmm, largo, hasta vaciarte. La exhalación debe durar el doble que la inhalación. Si quieres el efecto completo, tapa suavemente los oídos con los pulgares: el zumbido se vuelve el único sonido."],
   [136.1,4,4,"Reposo","Para de zumbar. Quédate con las manos en las piernas y nota la mandíbula, la frente, los hombros. Esto es receptividad, y se nota en el lenguaje corporal. Repite: “Mi cuerpo se calma. Desde la calma soy receptiva.”"]
 ]],
 ["amor-voz-completa","Voz y pecho · completo","Los tres en orden: zumbido para calmar, AAAH para abrir, YAM para asentar. Veintidós minutos de tu propia voz. Hazlo solo si estás sola en casa.",[
   [136.1,0,5,"Zumbido","Labios cerrados. Exhalaciones largas con mmmmm. Calma primero: no se puede abrir el pecho estando tensa."],
   [216,0,7,"AAAH","Ahora abre. “Aaah” larga sobre el tono, mano en el esternón. Más fuerte de lo que te da pena. Nadie te está oyendo."],
   [288,0,6,"YAM","“Iaaam”, cerrando con la M zumbada. El sonido se vuelve más chiquito y más adentro."],
   [216,7,4,"Cerrar","Silencio. Repite una vez: “Mi voz abre lo que mi cabeza no puede.”"]
 ]]
]);

mk("Tambor y limpieza",[
 ["amor-tambor-60","Tambor a 60 por minuto","Un pulso al ritmo de un corazón en reposo. En la medicina sonora amazónica y mesoamericana el tambor mueve lo que está pegado en el cuerpo. Activa el modo pulso para oírlo sin audífonos.",[
   [194.18,1,4,"Entrar al ritmo","Activa el modo pulso arriba, para que suene como golpe y no como tono. Un golpe por segundo: sesenta por minuto, un corazón tranquilo. Deja que el cuerpo lo agarre."],
   [194.18,1,10,"Mover","Si puedes, muévete: balancea el torso o camina en el lugar con el pulso. Lo que está pegado se suelta con movimiento, no con quietud. Si no puedes moverte, respira al ritmo."],
   [136.1,1.17,5,"Asentar","El ritmo se acelera apenas, a setenta. Para de moverte y quédate de pie o sentada, sintiendo el cuerpo caliente. Espacio abierto. Repite: “Dejo ir lo denso. Abro espacio.”"]
 ]],
 ["amor-tambor-70","Tambor y sonaja a 70","Más rápido, con la textura de la sonaja encima. Para los días pesados, cuando no hay ganas de nada: este empuja.",[
   [210.42,1.17,3,"Arrancar","Modo pulso activado. Setenta por minuto, un poco más rápido que tu corazón en reposo. Ponte de pie."],
   [210.42,1.17,9,"Sacudir","Sacude las manos, los brazos, los hombros, como quien se quita agua. Si tienes sonaja o maraca, úsala. Si no, las manos sirven. Esto no es bonito, es efectivo."],
   [221.23,8,4,"Quedarte","Para en seco. Quédate de pie, respirando fuerte, sin hacer nada. El contraste es el programa. Repite: “Me muevo aunque no tenga ganas.”"]
 ]],
 ["amor-limpiar-pecho","Limpiar el pecho","Para las memorias emocionales que viven en el esternón: lo que no se dijo, lo que se tragó, lo que todavía aprieta cuando te acuerdas.",[
   [396,8,4,"Encontrarlo","Mano en el centro del pecho. Presiona apenas. Busca el apretón, la bola, el peso. No lo nombres todavía: solo encuéntralo."],
   [396,1.17,8,"Tambor sobre el pecho","Modo pulso. Deja que el golpe entre justo donde está el peso. Si sale llanto, que salga: eso es lo que se está moviendo. No lo detengas ni lo expliques."],
   [639,7,6,"Llenar","El tono cambia. Ese espacio que quedó vacío no se deja vacío. Repite: “Limpio el lugar donde guardo lo que no dije.” Y respira llenándolo."]
 ]]
]);

mk("Noche y 432",[
 ["amor-432-cuerdas","Cuerdas en 432","Un fondo de cuerda afinado en 432 Hz, generado por la app. No es un bolero: es la base sobre la que puedes poner el tuyo, o dejarla sola para leer, cocinar o estar.",[
   [432,0,5,"Entrar","Súbelo bajito, de fondo. No tienes que hacer nada con este programa. Es ambiente, no ejercicio."],
   [216,0,15,"Fondo","La octava baja, más cálida. Si quieres poner tu propia música romántica encima, este es el momento: deja el fondo y sube tu canción a medio volumen."],
   [432,7.83,5,"Cerrar","Vuelve el tono con un pulso suave. Un cierre para que el cuerpo sepa que terminó. Repite: “Mi casa suena a amor.”"]
 ]],
 ["amor-dormir-afirmaciones","Afirmaciones al dormir","Veinticinco minutos para poner justo antes de dormir, con las frases del grupo repetidas en primera persona. Déjalo correr mientras te acomodas.",[
   [432,6,5,"Bajar","Acostada, luz apagada. No hagas esfuerzo por seguir las frases: si te duermes a la mitad, está bien. Mejor, de hecho."],
   [528,4.5,10,"Las frases","Repite por dentro, despacio, mientras aguantes: “Merezco amor sin tener que ganármelo.” “Soy magnética por lo que soy, no por lo que me falta.” “Estoy a salvo siendo vista de cerca.” Una y otra vez, sin orden."],
   [216,3,10,"Soltar","Deja las frases. Solo tono y respiración. A partir de aquí el programa trabaja solo."]
 ]],
 ["amor-noche-larga","Noche de amor · 45 minutos","El largo del grupo. Recorre todo: calma, Venus, corazón y 432 para dormir. Para un viernes, o para una noche en que quieras hacerte compañía bien.",[
   [136.1,8,6,"Llegar","Acomódate como si fuera a durar. Porque va a durar. Respira lento sin contar."],
   [221.23,7,10,"Venus","El tono de Venus. Habita el cuerpo sin pedirle nada. Gusto, no exigencia."],
   [639,6,10,"Corazón","Mano en el pecho. Piensa en alguien a quien quieres bien, sin complicación. Empieza por ahí: querer es un músculo y se calienta con lo fácil."],
   [528,5,10,"Merecer","Ahora ponte tú en el lugar de esa persona. Quiérete con la misma facilidad. Repite: “Me acompaño bien.”"],
   [216,3,9,"Dormir","Baja todo. Si te duermes aquí, perfecto. Ese era el plan."]
 ]]
]);

/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Mantras de atracción","Venus y planetarias","Theta y creencias","Tu propia voz","Tambor y limpieza","Noche y 432"].forEach(function(c){if(CATS.indexOf(c)<0)CATS.push(c)});
})();
