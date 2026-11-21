/* Lily Frequency · Manifestación y rituales
   Portado de la zona de miembros de la web. Cada paso conserva su texto guiado. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Métodos de manifestación",[
 ["man-01-metodo-369","Método 369","Escribe tu deseo 3 veces en la mañana, 6 al mediodía y 9 en la noche. Este audio te acompaña las tres veces",[
  [432,10,2,"Llegar","Toma tu cuaderno. Cierra los ojos un momento y respira. Vas a escribir, no a desear."],
  [528,8,5,"Escribir","Escribe tu frase en presente, como si ya fuera verdad. Sin negaciones. Escríbela despacio y siéntela en cada repetición."],
  [963,7,3,"Soltar","Cierra el cuaderno. Ya está dicho. Suelta el cómo y el cuándo."]]],
 ["man-02-metodo-55-por-5","Método 55 por 5","Una frase, 55 veces al día, durante 5 días. El audio sostiene el ritmo",[
  [432,10,2,"Elegir","Una sola frase, corta, en presente. Si dudas cuál, esa duda es la señal de que todavía no la tienes clara."],
  [528,8,12,"Escribir 55 veces","Escribe sin apurarte. Si la mente se va, vuelve a la frase. La repetición no es para el papel, es para ti."],
  [639,8,2,"Cerrar","Mismo lugar, misma hora, cinco días. Hoy ya cumpliste."]]],
 ["man-03-los-17-segundos","Los 17 segundos","Sostener un pensamiento 17 segundos sin que se cuele una duda. Más difícil de lo que suena",[
  [432,10,1,"Preparar","Elige una sola imagen de lo que quieres. Una, no varias."],
  [528,8,6,"Sostener","Sostén esa imagen. Si entra una duda, vuelve a empezar sin regañarte. Diecisiete segundos limpios valen más que diez minutos sucios."],
  [963,7,2,"Soltar","Déjala ir. Ya la sembraste."]]],
 ["man-04-scripting","Scripting","Escribe un día de tu vida futura como si ya lo estuvieras viviendo",[
  [432,10,2,"Fecha","Pon arriba una fecha del futuro. Escribe desde ahí, en presente."],
  [528,8,15,"Escribir el día","Cuenta cómo despiertas, qué ves al abrir los ojos, qué haces, con quién hablas, qué sientes al final del día. Detalles pequeños, no grandes logros."],
  [639,8,3,"Leerlo","Léelo en voz alta. Nota en qué parte se te cierra la garganta: ahí está la creencia que falta trabajar."]]],
 ["man-05-el-susurro","El susurro","Se lo dices al oído de alguien en tu imaginación. Funciona porque le quita el peso de pedir",[
  [432,9,3,"Traer a la persona","Imagina a alguien que te importa, de pie frente a ti."],
  [639,7,6,"Susurrar","Acércate a su oído y dile en voz baja la noticia que quieres dar. Dila como si ya hubiera pasado. Repítela tres veces."],
  [528,7,3,"Ver su cara","Mira cómo reacciona. Esa alegría de ella es la prueba que tu mente necesita."]]],
 ["man-06-manifestacion-en-24-horas","Manifestación en 24 horas","Para algo pequeño y concreto. Sirve para entrenarte, no para pedir la casa",[
  [432,10,2,"Elegir pequeño","Algo que podría pasar hoy sin que nadie se asombre: una llamada, un mensaje, encontrarte a alguien."],
  [528,8,6,"Verlo ocurrir","Míralo pasar en tu cabeza, con hora y lugar. Siéntelo normal, no extraordinario."],
  [963,7,2,"Olvidarlo","Y ahora olvídalo. Esa es la parte que casi nadie hace."]]],
 ["man-07-energia-de-la-suerte","Energía de la suerte","Esperar que las cosas salgan bien, por costumbre y no por esfuerzo",[
  [432,10,3,"Revisar","¿Qué esperas que pase hoy? No lo que quieres: lo que de verdad esperas. Ahí está tu punto de partida."],
  [528,9,8,"Cambiar la expectativa","A mí las cosas se me acomodan. Lo que es para mí llega sin que yo lo persiga. Repítelo hasta que deje de sonar raro."],
  [639,9,3,"Salir así","Sal de aquí con esa expectativa puesta. No la defiendas, solo tenla."]]],
 ["man-08-tarjeta-de-proposito-definido","Tarjeta de propósito definido","Una frase con cifra y fecha, leída dos veces al día en voz alta",[
  [432,10,2,"Escribirla","Escribe cuánto quieres, para cuándo, qué vas a dar a cambio y qué plan vas a seguir. Con número y con fecha."],
  [528,10,5,"Leerla en voz alta","Léela en voz alta, con emoción, no de corrido. Al despertar y antes de dormir."],
  [639,8,2,"Verte con ello","Mírate ya teniéndolo. No pidiendo: teniendo."]]],
 ["man-09-diario-de-gratitud","Diario de gratitud","Tres cosas, con detalle. Lo general no mueve nada",[
  [432,9,2,"Llegar","Abre el cuaderno. Hoy no escribes lo que falta."],
  [528,8,8,"Escribir tres","Tres cosas concretas de hoy. No “mi familia”: el momento exacto. Escribe por qué te movió."],
  [639,8,3,"Sentirlo","Quédate en la sensación un rato. Agradecer sin sentirlo es solo hacer una lista."]]],
 ["man-10-tablero-de-suenos","Tablero de sueños","Fondo para armarlo. Imágenes que te mueven el cuerpo, no las que se ven bonitas",[
  [432,10,3,"Elegir","Busca imágenes que te den algo en el estómago. Si solo te parecen bonitas, no sirven."],
  [528,9,18,"Armar","Ponlas donde las veas todos los días sin buscarlas. El tablero no manifiesta: te recuerda hacia dónde vas."],
  [639,8,3,"Mirarlo","Míralo una vez más, despacio. Deja que el cuerpo responda."]]]
]);

mk("Horas espejo y números",[
 ["man-11-11-11","11:11","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"11:11","El portal. Si lo estás viendo, para: lo que acabas de pensar es lo que estás sembrando. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-12-22-22","22:22","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"22:22","Equilibrio. Algo que traías partido en dos se está acomodando. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-13-00-00","00:00","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"00:00","Cierre y comienzo. Lo que termina aquí no vuelve. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-14-01-01","01:01","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"01:01","Una decisión tuya, no de otros. Pregúntate qué estás esperando que alguien decida por ti. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-15-02-02","02:02","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"02:02","Vínculos. Alguien está pensando en ti, o tú en alguien que no has llamado. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-16-03-03","03:03","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"03:03","Habla. Lo que llevas callando pide salir. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-17-04-04","04:04","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"04:04","Pide ayuda. No todo tienes que sostenerlo sola. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-18-05-05","05:05","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"05:05","Cambio en camino. No lo frenes queriendo controlar cómo llega. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-19-10-10","10:10","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"10:10","Empieza. Es la hora de la acción, no del plan. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-20-12-12","12:12","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"12:12","Vas bien. Sigue en esa dirección aunque todavía no veas resultado. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-21-13-13","13:13","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"13:13","Suelta lo viejo. Algo ya cumplió su tiempo y lo sabes. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-22-14-14","14:14","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"14:14","Estás acompañada. Lo que temes ya lo cruzaste antes. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-23-15-15","15:15","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"15:15","Amor. Revisa qué estás dando y qué estás recibiendo. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-24-20-20","20:20","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"20:20","Familia o casa. Algo ahí pide atención. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-25-21-21","21:21","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"21:21","Confianza. Deja de revisar si va a salir. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]],
 ["man-26-23-23","23:23","Si estás viendo esta hora: para un minuto y escucha",[
  [432,10,1,"Parar","Detente donde estés. Respira una vez, profundo."],
  [528,8,3,"23:23","Cierra el día. Lo de mañana se resuelve mañana. No lo analices. Nómbralo y sigue."],
  [639,9,1,"Seguir","Vuelve a lo tuyo con eso puesto."]]]
]);

mk("Tapping",[
 ["man-27-tapping-ansiedad","Tapping · Ansiedad","Rondas guiadas por los nueve puntos. El audio marca el ritmo",[
  [432,9,2,"Preparar","Siéntate cómoda. Golpea suave con dos dedos mientras repites. Punto del karate. Ceja. Lado del ojo. Bajo el ojo. Bajo la nariz. Barbilla. Clavícula. Costado. Coronilla."],
  [396,8,2,"Frase de montaje","Golpea el punto del karate y repite tres veces: Aunque sienta esta ansiedad, me acepto tal como estoy ahora."],
  [396,7,5,"Primera ronda","Ahora recorre los puntos, uno por uno, repitiendo: ansiedad. Nómbralo mientras golpeas."],
  [528,8,5,"Segunda ronda","Mismo recorrido, pero ahora repite: Esta ansiedad no es mía para siempre. Puede bajar. Está bajando."],
  [432,10,2,"Medir","Respira hondo. Del uno al diez, ¿cuánto queda? Si queda mucho, repite el audio."]]],
 ["man-28-tapping-miedo","Tapping · Miedo","Rondas guiadas por los nueve puntos. El audio marca el ritmo",[
  [432,9,2,"Preparar","Siéntate cómoda. Golpea suave con dos dedos mientras repites. Punto del karate. Ceja. Lado del ojo. Bajo el ojo. Bajo la nariz. Barbilla. Clavícula. Costado. Coronilla."],
  [396,8,2,"Frase de montaje","Golpea el punto del karate y repite tres veces: Aunque tenga este miedo, elijo estar en paz conmigo."],
  [396,7,5,"Primera ronda","Ahora recorre los puntos, uno por uno, repitiendo: miedo. Nómbralo mientras golpeas."],
  [528,8,5,"Segunda ronda","Mismo recorrido, pero ahora repite: Puedo tener miedo y hacerlo igual. El miedo no decide por mí."],
  [432,10,2,"Medir","Respira hondo. Del uno al diez, ¿cuánto queda? Si queda mucho, repite el audio."]]],
 ["man-29-tapping-enojo","Tapping · Enojo","Rondas guiadas por los nueve puntos. El audio marca el ritmo",[
  [432,9,2,"Preparar","Siéntate cómoda. Golpea suave con dos dedos mientras repites. Punto del karate. Ceja. Lado del ojo. Bajo el ojo. Bajo la nariz. Barbilla. Clavícula. Costado. Coronilla."],
  [396,8,2,"Frase de montaje","Golpea el punto del karate y repite tres veces: Aunque esté enojada, me permito sentirlo sin castigarme."],
  [396,7,5,"Primera ronda","Ahora recorre los puntos, uno por uno, repitiendo: enojo. Nómbralo mientras golpeas."],
  [528,8,5,"Segunda ronda","Mismo recorrido, pero ahora repite: Suelto lo que no puedo cambiar. Me quedo con lo que sí."],
  [432,10,2,"Medir","Respira hondo. Del uno al diez, ¿cuánto queda? Si queda mucho, repite el audio."]]],
 ["man-30-tapping-culpa","Tapping · Culpa","Rondas guiadas por los nueve puntos. El audio marca el ritmo",[
  [432,9,2,"Preparar","Siéntate cómoda. Golpea suave con dos dedos mientras repites. Punto del karate. Ceja. Lado del ojo. Bajo el ojo. Bajo la nariz. Barbilla. Clavícula. Costado. Coronilla."],
  [396,8,2,"Frase de montaje","Golpea el punto del karate y repite tres veces: Aunque cargue esta culpa, me perdono por lo que no supe hacer antes."],
  [396,7,5,"Primera ronda","Ahora recorre los puntos, uno por uno, repitiendo: culpa. Nómbralo mientras golpeas."],
  [528,8,5,"Segunda ronda","Mismo recorrido, pero ahora repite: Hice lo que pude con lo que sabía. Eso basta."],
  [432,10,2,"Medir","Respira hondo. Del uno al diez, ¿cuánto queda? Si queda mucho, repite el audio."]]],
 ["man-31-tapping-escasez","Tapping · Escasez","Rondas guiadas por los nueve puntos. El audio marca el ritmo",[
  [432,9,2,"Preparar","Siéntate cómoda. Golpea suave con dos dedos mientras repites. Punto del karate. Ceja. Lado del ojo. Bajo el ojo. Bajo la nariz. Barbilla. Clavícula. Costado. Coronilla."],
  [396,8,2,"Frase de montaje","Golpea el punto del karate y repite tres veces: Aunque sienta que no alcanza, me abro a que sí alcance."],
  [396,7,5,"Primera ronda","Ahora recorre los puntos, uno por uno, repitiendo: escasez. Nómbralo mientras golpeas."],
  [528,8,5,"Segunda ronda","Mismo recorrido, pero ahora repite: Hay suficiente. Yo también soy suficiente."],
  [432,10,2,"Medir","Respira hondo. Del uno al diez, ¿cuánto queda? Si queda mucho, repite el audio."]]],
 ["man-32-tapping-antes-de-dormir","Tapping · Antes de dormir","Rondas guiadas por los nueve puntos. El audio marca el ritmo",[
  [432,9,2,"Preparar","Siéntate cómoda. Golpea suave con dos dedos mientras repites. Punto del karate. Ceja. Lado del ojo. Bajo el ojo. Bajo la nariz. Barbilla. Clavícula. Costado. Coronilla."],
  [396,8,2,"Frase de montaje","Golpea el punto del karate y repite tres veces: Aunque el día haya sido mucho, suelto lo que quedó pendiente."],
  [396,7,5,"Primera ronda","Ahora recorre los puntos, uno por uno, repitiendo: antes de dormir. Nómbralo mientras golpeas."],
  [528,8,5,"Segunda ronda","Mismo recorrido, pero ahora repite: Nada se arregla esta noche. Mañana sigo."],
  [432,10,2,"Medir","Respira hondo. Del uno al diez, ¿cuánto queda? Si queda mucho, repite el audio."]]]
]);

mk("Visualizaciones",[
 ["man-33-la-vida-sonada-ya-cumplida","La vida soñada ya cumplida","Mírate dentro de un año, con todo ya pasado. No lo construyas: recuérdalo.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Estás en un día cualquiera de esa vida. Mira dónde despiertas. Qué ves por la ventana. Qué hay sobre tu mesa. No lo inventes: recuérdalo, como quien recuerda algo que ya vivió."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-34-el-yo-ideal-en-presente","El yo ideal en presente","Tú, dentro de un año, caminando hacia ti. Mírala bien.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Mírala caminar hacia ti. Cómo va vestida. Cómo camina. Qué cara tiene cuando no la está viendo nadie. Ahora da un paso adelante y métete en ella."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-35-exito-en-el-trabajo","Éxito en el trabajo","Para antes de una semana grande.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Mírate trabajando con todo resuelto. Las decisiones salen solas. Terminas y todavía te queda energía. Siente cómo es tu cuerpo ese día."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-36-ingenieria-inversa","Ingeniería inversa","Del resultado hacia atrás, paso por paso.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Párate en el día en que ya lo lograste. Ahora mira hacia atrás. ¿Cuál fue el paso justo antes? ¿Y antes de ese? Baja hasta llegar a hoy. Ese último paso es el que te toca mañana."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-37-salto-cuantico","Salto cuántico","Para cuando la vida que quieres se siente demasiado lejos.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Hay una versión tuya que ya vive eso. No está en el futuro: está al lado. Camina hacia ella y ocupa su lugar. No cambiaste: te mudaste."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-38-construccion-de-escenas","Construcción de escenas","Una escena corta que implique que ya pasó.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","No visualices el logro completo. Visualiza una escena pequeña que solo podría pasar si ya lo lograste: alguien felicitándote, una llave en tu mano, una firma. Repite esa escena hasta que se gaste."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-39-ley-de-asuncion","Ley de asunción","Asumir, no pedir.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Deja de pedirlo. Asúmelo. Habla contigo como habla alguien que ya lo tiene. La diferencia entre pedir y asumir se siente en el pecho."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]],
 ["man-40-de-victima-a-creadora","De víctima a creadora","Para cuando todo parece que te pasa a ti.",[
  [432,8,3,"Descender","Cierra los ojos. Respira largo hasta que el cuerpo pese."],
  [528,6,10,"Ver","Nombra algo que sientes que te hicieron. Ahora pregúntate, sin castigarte: ¿qué parte de esto sí estuvo en mis manos? Ahí, exactamente ahí, está tu poder de vuelta."],
  [639,6,4,"Sentirlo","Quédate en la emoción, no en la imagen. La emoción es la que graba."],
  [432,10,2,"Volver","Vuelve despacio. Mueve las manos antes de abrir los ojos."]]]
]);

mk("Limpiezas energéticas",[
 ["man-41-ducha-de-limpieza","Ducha de limpieza","Bajo el agua, tres respiraciones y tres intenciones. El clásico diario",[
  [432,9,2,"Entrar","Bajo el agua. Siente la temperatura. Suelta los hombros."],
  [396,7,4,"Soltar","Imagina que el agua se lleva lo que traes del día. Lo tuyo y lo que no era tuyo. Déjalo irse por el desagüe."],
  [528,8,3,"Llenar","Ahora el agua ya no quita: llena. Luz entrando por la coronilla hasta los pies."],
  [963,7.83,2,"Sellar","Cierra la llave. Lo que entró se queda."]]],
 ["man-42-blindaje-antes-de-salir","Blindaje antes de salir","Tres minutos antes de un día con mucha gente",[
  [396,7.83,3,"Raíz y corona","Pies firmes. Raíz abajo, corona arriba, a la vez."],
  [963,7.83,4,"La esfera","Luz dorada formando una esfera que te rodea por completo. Nada que no sea amor la atraviesa."],
  [432,7.83,2,"Sellar","Respira hondo. Puesto."]]],
 ["man-43-despues-de-dar-sesion","Después de dar sesión","Para terapeutas. Soltar lo que recogiste de otro cuerpo",[
  [741,8,3,"Reconocer","Lo que sientes ahora puede no ser tuyo. Pregúntate: ¿esto venía conmigo cuando llegué?"],
  [396,6,6,"Devolver","Lo que no es mío lo suelto, lo libero y lo regreso a quien pertenece, con amor y sin carga."],
  [528,7,4,"Recuperar","Y lo mío que dejé afuera, lo llamo de vuelta. Vuelve limpio."],
  [963,7.83,2,"Cerrar","Lávate las manos cuando termine el audio. El cuerpo necesita el gesto."]]],
 ["man-44-limpieza-del-hogar","Limpieza del hogar","Ponla en parlante y recorre la casa. Empieza por el fondo y sal hacia la puerta",[
  [741,0,4,"Abrir","Abre ventanas. Empieza por el cuarto más lejano a la puerta."],
  [639,0,10,"Recorrer","Camina despacio por cada cuarto. En las esquinas detente un momento: ahí se junta lo estancado."],
  [528,0,5,"Salir","Termina en la puerta de entrada, mirando hacia afuera. Lo que salió no vuelve."],
  [136.1,7.83,4,"Asentar","Cierra. Deja que la casa se acomode."]]],
 ["man-45-cortar-con-alguien","Cortar con alguien","Para el vínculo que te sigue pesando aunque ya no esté",[
  [432,8,3,"Traerla","Trae a esa persona a tu mente. No para pelear: para cerrar."],
  [396,6,6,"Ver el hilo","Mira el hilo que los une y de dónde sale en tu cuerpo. Ahí es donde te sigue jalando."],
  [639,7,5,"Soltar","Agradece lo que sí te dio. Y suelta el hilo. No lo cortes con rabia: suéltalo."],
  [528,7.83,3,"Sellar","Pon luz donde estaba el hilo. Cierra ahí."]]],
 ["man-46-devolver-lo-que-no-es-mio","Devolver lo que no es mío","Cuando cargas un ánimo que no sabes de dónde salió",[
  [741,8,3,"Revisar","¿Desde cuándo lo sientes? ¿Con quién estabas antes de sentirlo?"],
  [396,6,6,"Devolver","Todo lo que estoy cargando que no es mío lo suelto, lo libero y lo regreso a quien pertenece."],
  [528,8,3,"Quedarme conmigo","Lo que queda después de soltar eso, eso sí eres tú."]]],
 ["man-47-oracion-de-proteccion","Oración de protección","Para quien reza. Fondo para tu propia oración",[
  [963,7.83,12,"Rezar","Di tu oración. El sonido solo acompaña."]]],
 ["man-48-afirmaciones-de-proteccion","Afirmaciones de protección","Dichas en voz alta, de pie",[
  [396,9,2,"De pie","Ponte de pie. Pies firmes. Esto se dice en voz alta."],
  [528,9,6,"Decir","Estoy protegida. Mi energía es mía. Nada que no sea amor entra en mi espacio. Lo que no me corresponde, no me alcanza. Repítelo hasta que lo creas."],
  [963,7.83,2,"Sostener","Quédate de pie un momento más. Así se siente."]]],
 ["man-49-limpiar-un-objeto","Limpiar un objeto","Algo heredado, de segunda mano, o que llegó con historia",[
  [741,7,3,"Sostenerlo","Tómalo con las dos manos. Nota si pesa más de lo que debería."],
  [396,6,6,"Soltar lo que trae","Lo que venga con esto que no sea para mí, lo suelto y lo devuelvo. Que quede solo el objeto."],
  [528,8,3,"Reclamarlo","Ahora es mío. Entra a mi casa limpio."]]],
 ["man-50-cierre-de-la-noche","Cierre de la noche","Soltar el día antes de dormir. Cinco minutos",[
  [432,9,2,"Repasar","Repasa el día sin juzgarlo. Solo míralo pasar."],
  [396,6,3,"Soltar","Lo que quedó pendiente se queda en el día. No se viene a la cama."],
  [174,4,3,"Cerrar","Cierra los ojos. Mañana sigues."]]]
]);

mk("Naturaleza y cuerpo",[
 ["man-51-pies-en-la-tierra","Pies en la tierra","Grounding. Descálzate sobre tierra, pasto o arena",[
  [194.18,8,3,"Descalzarte","Quítate los zapatos. Siente la temperatura del suelo."],
  [396,7.83,10,"Enraizar","Imagina raíces saliendo de tus pies. No te sostienes tú: te sostiene la tierra."],
  [194.18,7.83,4,"Recibir","Deja que suba. No tienes que hacer nada más."]]],
 ["man-52-bano-de-sol-de-la-manana","Baño de sol de la mañana","Los primeros minutos de sol, sin lentes, en la piel",[
  [126.22,10,2,"Salir","Sal apenas amanezca. Sin lentes, sin pantalla."],
  [126.22,12,8,"Recibir","Cara al sol, ojos cerrados. Esto le dice a tu cuerpo qué hora es. Es lo que ordena todo lo demás del día."],
  [528,10,3,"Guardarlo","Guárdate la sensación. Vas a necesitarla a las tres de la tarde."]]],
 ["man-53-paseo-consciente","Paseo consciente","Veinte minutos caminando sin teléfono y sin destino",[
  [432,10,3,"Salir","Deja el teléfono. De verdad."],
  [528,9,14,"Caminar","Camina sin rumbo. Mira árboles, no pantallas. Si la cabeza se va a los pendientes, vuelve a lo que ven tus ojos."],
  [639,9,3,"Volver","Regresa por otro camino. A propósito."]]],
 ["man-54-abrazar-un-arbol","Abrazar un árbol","Suena ridículo hasta que lo haces",[
  [194.18,8,3,"Elegir","Busca uno que te llame. No lo pienses mucho."],
  [136.1,7.83,8,"Quedarte","Apoya las manos o la frente. Quédate más tiempo del que te da pena. Ahí empieza."],
  [528,8,3,"Agradecer","Agradece antes de soltarlo."]]],
 ["man-55-respirar-en-el-agua","Respirar en el agua","Mar, río o regadera. Donde haya agua corriendo",[
  [211.44,7,12,"Respirar","Respira al ritmo del agua. No más lento, no más rápido. Al ritmo del agua."]]],
 ["man-56-mirar-el-cielo","Mirar el cielo","Diez minutos boca arriba, sin hacer nada",[
  [963,8,2,"Acostarte","Boca arriba, donde veas cielo."],
  [963,6,8,"Mirar","No busques formas. Solo mira. Deja que la cabeza se quede sin tema."]]]
]);

mk("Enfoque y sistema nervioso",[
 ["man-57-bajar-el-cortisol","Bajar el cortisol","Para el cuerpo que lleva semanas en alerta",[
  [432,9,3,"Reconocer","Nota dónde está la tensión. Mandíbula, hombros, estómago."],
  [174,6,10,"Bajar","Exhala más largo que inhalas. Esa es toda la técnica. El cuerpo lee la exhalación larga como señal de que no hay peligro."],
  [136.1,5,5,"Sostener","Quédate aquí. El sistema nervioso tarda en creerte."]]],
 ["man-58-salir-del-agotamiento","Salir del agotamiento","Cuando ya no es cansancio, es vacío",[
  [285,7,4,"Permiso","No tienes que rendir ahorita. Eso es lo primero."],
  [174,5,10,"Reparar","Deja que el cuerpo haga lo suyo. No le pidas nada."],
  [528,8,6,"Volver despacio","Vuelve sin exigirte. Hoy basta con esto."]]],
 ["man-59-estado-de-flujo","Estado de flujo","Cuarenta minutos de trabajo sin picos ni bajones",[
  [432,11,15,"Entrar",""],
  [432,12,20,"Flujo",""],
  [432,10,5,"Salir",""]]],
 ["man-60-ritmo-circadiano","Ritmo circadiano","Para reordenar el reloj interno. Úsalo a la misma hora una semana",[
  [194.18,10,3,"Marcar la hora","Misma hora cada día. Eso es lo que lo arregla, no el audio."],
  [174,5,8,"Bajar","Luz baja, pantallas lejos. El cuerpo necesita la señal."],
  [174,3,4,"Dormir","Déjalo sonando."]]],
 ["man-61-dormir-sin-pensar","Dormir sin pensar","Para la cabeza que no se apaga",[
  [432,8,8,"Bajar el día",""],
  [396,6,10,"Soltar la rumia",""],
  [174,4,12,"Theta",""],
  [174,2,15,"Delta",""]]],
 ["man-62-antes-de-algo-importante","Antes de algo importante","Siete minutos para entrar en estado, no para repasar",[
  [432,10,2,"Parar","Deja de repasar. Ya lo sabes."],
  [396,9,3,"Bajar el pulso","Exhala largo. Cuatro veces."],
  [528,14,2,"Entrar","Entra siendo quien ya sabe hacerlo."]]],
 ["man-63-recuperar-la-atencion","Recuperar la atención","Diez minutos para volver cuando te dispersaste",[
  [432,12,3,"Recoger","Cierra todo. Una sola cosa."],
  [432,16,7,"Enfocar","Vuelve a esa cosa cada vez que la cabeza se vaya. Esa vuelta es el ejercicio."]]],
 ["man-64-pausa-de-tres-minutos","Pausa de tres minutos","Entre reunión y reunión. Lo más corto que sirve",[
  [432,9,3,"Respirar","Tres minutos. Nada más. Ojos cerrados si puedes, abiertos si no."]]]
]);


/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Métodos de manifestación","Horas espejo y números","Tapping","Visualizaciones","Limpiezas energéticas","Naturaleza y cuerpo","Enfoque y sistema nervioso"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
