/* Lily Frequency · Ciclos y tiempos
   Portado de la zona de miembros de la web. Cada paso conserva su texto guiado. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Fases de la luna",[
 ["cic-01-luna-nueva-sembrar","Luna nueva · Sembrar","La noche de luna nueva. Para poner intención, no para pedir",[
  [174,6,3,"Oscuridad","No hay luna. Todo está por empezar. Quédate en lo oscuro un rato sin llenarlo."],
  [528,7,10,"Sembrar","Una sola intención para este ciclo. Dila en voz baja, en presente."],
  [136.1,6,5,"Enterrarla","Déjala en lo oscuro. No la revises mañana."]]],
 ["cic-02-luna-creciente-empujar","Luna creciente · Empujar","Los días en que hay que hacer. Para sostener el esfuerzo",[
  [432,10,3,"Mirar","Va creciendo. Lo tuyo también."],
  [528,9,10,"Actuar","Qué paso toca hoy. Uno concreto."],
  [639,10,4,"Empujar","Hazlo hoy, no mañana."]]],
 ["cic-03-luna-llena-ver","Luna llena · Ver","La noche de más luz. Para mirar lo que ya no se puede esconder",[
  [963,8,3,"Luz","Todo se ve. Eso incluye lo que no querías ver."],
  [852,6,12,"Mirarlo","Qué se te está mostrando este mes. Sin taparlo."],
  [639,7,5,"Agradecer","Agradece lo que llegó y lo que no."]]],
 ["cic-04-luna-llena-soltar","Luna llena · Soltar","La otra cara de la llena. Para dejar ir",[
  [396,7,3,"Nombrar","Qué sueltas este ciclo. Una cosa."],
  [417,6,12,"Soltar","No lo pelees. Solo abre la mano."],
  [963,7,5,"Cerrar","Lo que se fue, se fue."]]],
 ["cic-05-luna-menguante-limpiar","Luna menguante · Limpiar","Los días de quitar, no de poner",[
  [432,8,3,"Revisar","Qué sobra en tu vida ahora mismo."],
  [741,7,10,"Quitar","Una cosa que vas a quitar esta semana. Decídela aquí."],
  [528,8,4,"Aligerar","Se siente más liviano. Así se queda."]]],
 ["cic-06-luna-oscura-descansar","Luna oscura · Descansar","Los dos días antes de la nueva. Para no hacer nada",[
  [174,6,4,"Parar","Hoy no se empuja. No es flojera: es parte del ciclo."],
  [136.1,4,14,"Vacío",""],
  [136.1,5,4,"Quedarte","Mañana tampoco."]]],
 ["cic-07-eclipse","Eclipse","Para los días de eclipse, cuando todo se siente raro",[
  [432,8,3,"Reconocer","Se siente desordenado. Es normal estos días."],
  [417,6,10,"No decidir","No es día de decisiones grandes. Solo de observar."],
  [963,7,5,"Esperar","Pasa. Siempre pasa."]]],
 ["cic-08-ciclo-completo","Ciclo completo","Veintiocho minutos recorriendo todas las fases, uno por día",[
  [174,6,5,"Nueva","Siembra."],
  [528,9,7,"Creciente","Empuja."],
  [963,7,7,"Llena","Mira."],
  [741,7,6,"Menguante","Limpia."],
  [136.1,5,3,"Oscura","Descansa."]]],
 ["cic-46-cuarto-creciente-decidir","Cuarto creciente · Decidir","La media luna que crece, siete días después de la nueva. El punto de decidir",[
  [432,9,3,"Medio camino","Media luna. Lo que sembraste en la nueva ya mostró si camina o no."],
  [528,8,9,"Decidir","Aquí casi siempre aparece el primer obstáculo. No es señal de que esté mal: es la parte del ciclo donde se decide si sigues o ajustas. Decide hoy, no la semana que viene."],
  [963,7,4,"Sostener","Ya decidiste. El resto del creciente es sostener esa decisión."]]],
 ["cic-47-cuarto-menguante-revisar","Cuarto menguante · Revisar","La media luna que decrece, siete días después de la llena. El punto de revisar",[
  [852,7,3,"Mirar atrás","La luz baja. Es el momento de revisar el ciclo que termina."],
  [417,6,9,"Revisar","Qué funcionó y qué no. Sin regañarte: solo el dato. Lo que no funcionó no vuelve al próximo ciclo, y eso es ganancia."],
  [136.1,6,4,"Guardar","Guárdalo. En la luna oscura no vas a querer pensar, y está bien."]]],
 ["cic-48-superluna-todo-mas-fuerte","Superluna · Todo más fuerte","La llena que cae con la luna más cerca de la Tierra. Se ve más grande y se siente más",[
  [963,9,3,"Más cerca","Esta noche la luna está en su punto más cercano del año. Se ve hasta un catorce por ciento más grande."],
  [210.42,7,11,"Sentirlo","Todo lo de la luna llena, pero subido de volumen: la emoción, el insomnio, las ganas de decir cosas. No tomes decisiones grandes esta noche. Solo siéntelo."],
  [639,7,4,"Bajar","Baja despacio. Mañana sigues con la cabeza más fría."]]],
 ["cic-49-luna-azul-la-segunda-llena","Luna azul · La segunda llena","La segunda luna llena en un mismo mes. Pasa cada dos o tres años",[
  [432,8,3,"Lo que no pasa seguido","Una luna azul es rara. Por eso la frase: once in a blue moon."],
  [528,7,10,"Pedir lo grande","Como no se repite pronto, pide lo que no te atreves a pedir cada mes. Lo grande, lo que te da pena decir en voz alta. Dilo completo."],
  [963,8,4,"Soltarlo","Ya está dicho. No lo repitas hasta la próxima."]]],
 ["cic-50-luna-llena-en-tu-signo","Luna llena en tu signo","Una vez al año la llena cae en tu signo solar. Es tu luna personal",[
  [963,9,3,"Tu luna","Una vez al año le toca a tu signo. La luna llena te ilumina a ti directamente."],
  [852,6,11,"Verte","Mírate como te vería alguien que te quiere bien y no te debe nada. Qué ve. Qué te diría. Qué dejó de ser cierto sobre ti este año."],
  [639,7,4,"Quedártelo","Quédate con una sola frase de esas. Es tu frase del año."]]],
 ["cic-51-noche-de-llena-sin-sueno","Noche de llena sin sueño","Para las noches de luna llena en que no agarras el sueño. Larga y sin exigencia",[
  [432,6,5,"No pelear","Si no viene el sueño, no lo persigas: eso lo espanta. Esta media hora no es para dormir, es para descansar aunque no duermas."],
  [174,4,12,"Theta","Deja los ojos cerrados y el cuerpo quieto. El descanso quieto sirve casi tanto como el sueño, aunque no se sienta igual."],
  [136.1,2,13,"Delta","Si te duermes aquí, perfecto. Si no, igual amaneces descansada."]]]
]);

mk("Zodiaco",[
 ["cic-09-aries","Aries","Arranque y coraje. Para empezar algo que llevas posponiendo",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [528,10,10,"Fuego","Qué has estado evitando empezar. Hoy das el primer paso, aunque sea torpe."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-10-tauro","Tauro","Cuerpo y disfrute. Para volver a los sentidos",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [174,8,10,"Tierra","Qué te da gusto de verdad, con el cuerpo. Date una de esas hoy, sin justificarte."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-11-geminis","Géminis","Palabra y curiosidad. Para decir y preguntar",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [741,10,10,"Aire","Hay algo que quieres preguntar y no preguntas. Pregúntalo."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-12-cancer","Cáncer","Casa y memoria. Para lo de adentro y lo de atrás",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [639,7,10,"Agua","Trae tu casa de la infancia. Qué sigue vivo de ahí, para bien y para mal."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-13-leo","Leo","Brillo y dignidad. Para dejar de achicarse",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [528,9,10,"Fuego","Dónde te estás haciendo chiquita para que nadie se incomode. Ocupa tu tamaño."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-14-virgo","Virgo","Orden y servicio. Para acomodar lo que está revuelto",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [432,10,10,"Tierra","Una cosa pequeña y concreta que puedes dejar ordenada hoy."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-15-libra","Libra","Vínculo y justicia. Para las relaciones desparejas",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [639,8,10,"Aire","En qué vínculo estás dando más de lo que recibes. Míralo sin culpar a nadie."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-16-escorpio","Escorpio","Fondo y transformación. Para lo que no se dice",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [417,6,10,"Agua","Qué sabes de ti que no le has dicho a nadie. No lo digas: solo míralo."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-17-sagitario","Sagitario","Horizonte y sentido. Para cuando todo se siente chico",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [963,9,10,"Fuego","Hacia dónde quieres ir que ni siquiera te has permitido nombrar."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-18-capricornio","Capricornio","Estructura y tiempo largo. Para construir con paciencia",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [174,8,10,"Tierra","Qué estás construyendo que no se va a ver este año. Sostenlo igual."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-19-acuario","Acuario","Libertad y comunidad. Para salirte del molde",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [852,10,10,"Aire","Qué haces solo porque se espera de ti. Qué pasaría si dejaras de hacerlo."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-20-piscis","Piscis","Disolver y soñar. Para soltar los bordes",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [136.1,5,10,"Agua","Deja de ser alguien por diez minutos. No tienes nombre ni historia aquí."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-34-temporada-de-aries","Temporada de Aries","21 de marzo al 19 de abril. El año empieza aquí, no en enero",[
  [432,9,3,"Entrar","Es el primer signo: todo vuelve a cero. Lo que no empezaste el año pasado, empieza ahora. Este programa va sobre el tono de Marte, el regente del signo."],
  [144.72,7,10,"Arrancar","Elige una sola cosa que llevas posponiendo y dale el primer paso esta semana. Uno solo, el más chiquito. El mes de Aries premia al que arranca, no al que planea."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-35-temporada-de-tauro","Temporada de Tauro","20 de abril al 20 de mayo. El mes de bajarle al ritmo y disfrutar",[
  [432,9,3,"Entrar","Después del arranque viene el cuerpo. Este mes no se empuja: se sostiene. Este programa va sobre el tono de Venus, el regente del signo."],
  [221.23,7,10,"Asentar","Qué de lo que empezaste merece quedarse. Dale raíz: un horario, un lugar, una rutina. Y come rico, duerme bien, toca cosas suaves. En Tauro eso es trabajo espiritual."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-36-temporada-de-geminis","Temporada de Géminis","21 de mayo al 20 de junio. El mes de preguntar y de decir",[
  [432,9,3,"Entrar","Mercurio manda este mes. Lo que no se dice, se enreda. Este programa va sobre el tono de Mercurio, el regente del signo."],
  [141.27,7,10,"Hablar","Hay una conversación que vienes evitando. En este mes se da más fácil. Mándale el mensaje, haz la llamada, pregunta lo que no te atreves."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-37-temporada-de-cancer","Temporada de Cáncer","21 de junio al 22 de julio. El mes de la casa y de los tuyos",[
  [432,9,3,"Entrar","La Luna rige este mes. Todo se vuelve más sensible y más hacia adentro. Este programa va sobre el tono de Luna, el regente del signo."],
  [210.42,7,10,"Volver","Acuérdate de dónde vienes. Llama a alguien de tu familia, arregla un rincón de tu casa, cocina algo que te recuerde a tu niñez. Lo de afuera puede esperar un mes."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-38-temporada-de-leo","Temporada de Leo","23 de julio al 22 de agosto. El mes de dejar de achicarte",[
  [432,9,3,"Entrar","El Sol en su propia casa. Es el mes del año en que menos cuesta mostrarse. Este programa va sobre el tono de Sol, el regente del signo."],
  [126.22,7,10,"Brillar","Dónde te has estado haciendo chiquita para no incomodar. Este mes di tu precio completo, publica lo que no publicas, acepta el halago sin desviarlo."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-39-temporada-de-virgo","Temporada de Virgo","23 de agosto al 22 de septiembre. El mes de ordenar lo revuelto",[
  [432,9,3,"Entrar","Después del brillo viene el detalle. Virgo no construye: corrige. Este programa va sobre el tono de Mercurio, el regente del signo."],
  [141.27,7,10,"Afinar","Elige un área desordenada: los papeles, las cuentas, la agenda, un cajón. Ordénala de verdad. El mes de Virgo paga el trabajo aburrido."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-40-temporada-de-libra","Temporada de Libra","23 de septiembre al 22 de octubre. El mes de los vínculos",[
  [432,9,3,"Entrar","Venus otra vez, pero ahora hacia afuera: el otro, el acuerdo, lo justo. Este programa va sobre el tono de Venus, el regente del signo."],
  [221.23,7,10,"Equilibrar","Qué relación está despareja: das mucho más o recibes mucho más. Este mes se puede renegociar sin romper. Di lo que necesitas en una frase."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-41-temporada-de-escorpio","Temporada de Escorpio","23 de octubre al 21 de noviembre. El mes de lo que no se dice",[
  [432,9,3,"Entrar","El mes más hondo del año. Sale a la superficie lo que estaba guardado. Este programa va sobre el tono de Plutón, el regente del signo."],
  [140.25,7,10,"Bajar al fondo","No le huyas a lo que se remueve: en Escorpio lo que sube es lo que ya estaba listo para salir. Escríbelo si no puedes decirlo. Nadie tiene que leerlo."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-42-temporada-de-sagitario","Temporada de Sagitario","22 de noviembre al 21 de diciembre. El mes de agrandar el horizonte",[
  [432,9,3,"Entrar","Júpiter expande. Después del fondo de Escorpio, el aire. Este programa va sobre el tono de Júpiter, el regente del signo."],
  [183.58,7,10,"Abrir","Qué te has estado creyendo que es imposible. Este mes piénsalo en grande otra vez, sin calcular todavía el cómo. Estudia algo, planea un viaje, di que sí."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-43-temporada-de-capricornio","Temporada de Capricornio","22 de diciembre al 19 de enero. El mes de construir con paciencia",[
  [432,9,3,"Entrar","Saturno pone el límite y el tiempo largo. Este mes no se sueña: se arma. Este programa va sobre el tono de Saturno, el regente del signo."],
  [147.85,7,10,"Estructurar","Toma lo que imaginaste en Sagitario y ponle fechas. Qué va primero, qué va después, qué haces este mes. Capricornio premia al que hace el calendario."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-44-temporada-de-acuario","Temporada de Acuario","20 de enero al 18 de febrero. El mes de salirte del molde",[
  [432,9,3,"Entrar","Urano rompe lo que ya no sirve. Es el mes raro del año, y está bien que lo sea. Este programa va sobre el tono de Urano, el regente del signo."],
  [207.36,7,10,"Soltar el molde","Qué haces solo porque siempre se ha hecho así. Este mes cambia una de esas cosas. Y busca a tu gente: Acuario es el signo de la tribu, no de la soledad."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]],
 ["cic-45-temporada-de-piscis","Temporada de Piscis","19 de febrero al 20 de marzo. El mes de soltar los bordes",[
  [432,9,3,"Entrar","El último signo. Lo que cierra el año zodiacal antes de volver a Aries. Este programa va sobre el tono de Neptuno, el regente del signo."],
  [211.44,7,10,"Disolver","Este mes no exige nada: perdona, descansa, llora si hay que llorar. Suelta lo que no se va a resolver. En tres semanas arranca otra vuelta y conviene llegar liviana."],
  [963,8,4,"Llevarlo","Sal con una sola decisión tomada. Vuelve a este programa cuantas veces quieras mientras dure la temporada."]]]
]);

mk("Días planetarios",[
 ["cic-21-lunes-luna","Lunes · Luna","El día de lo emocional y lo doméstico. Para empezar la semana desde adentro",[
  [210.42,8,3,"Entrar","Lunes es día de luna: de sentir antes de hacer."],
  [210.42,7,9,"Sentir","Cómo llegas a esta semana, de verdad. No cómo deberías llegar."],
  [174,8,4,"Ordenar","Una cosa de tu casa o de tu cuerpo que vas a atender hoy."]]],
 ["cic-22-martes-marte","Martes · Marte","Acción y empuje. Para lo que requiere agallas",[
  [144.72,12,3,"Entrar","Martes es de Marte: lo que pide fuerza va hoy."],
  [144.72,14,9,"Empujar","Qué conversación o qué tarea has estado evitando. Hoy va."],
  [528,12,3,"Salir","Ve a hacerlo ahora, no mañana."]]],
 ["cic-23-miercoles-mercurio","Miércoles · Mercurio","Palabra, trámite y aprendizaje. Para lo que se comunica",[
  [141.27,12,3,"Entrar","Miércoles es de Mercurio: hoy se habla, se escribe y se arregla papel."],
  [141.27,13,9,"Ordenar","Qué mensaje, qué trámite, qué llamada. Haz la lista aquí."],
  [741,12,3,"Empezar","El primero de la lista, ahora."]]],
 ["cic-24-jueves-jupiter","Jueves · Júpiter","Expansión y abundancia. Para pensar en grande",[
  [183.58,9,3,"Entrar","Jueves es de Júpiter: el día de abrir, no de cerrar."],
  [183.58,8,10,"Abrir","Qué posibilidad has estado descartando por chiquita que te sientes."],
  [963,9,4,"Permitir","Permítela. Nada más eso hoy."]]],
 ["cic-25-viernes-venus","Viernes · Venus","Amor, belleza y placer. Para lo que da gusto",[
  [221.23,8,3,"Entrar","Viernes es de Venus: hoy toca lo que te gusta."],
  [221.23,7,9,"Disfrutar","Algo bonito o rico, hoy, sin productividad de por medio."],
  [639,8,4,"Recibir","Y recíbelo sin devolver nada."]]],
 ["cic-26-sabado-saturno","Sábado · Saturno","Límite y estructura. Para poner orden y decir que no",[
  [147.85,7,3,"Entrar","Sábado es de Saturno: el día de los límites."],
  [147.85,7,10,"Limitar","A qué o a quién le tienes que decir que no. Ensáyalo aquí."],
  [396,8,4,"Sostener","Un límite se pone una vez y se sostiene muchas."]]],
 ["cic-27-domingo-sol","Domingo · Sol","Centro y descanso. Para volver a ti antes de la semana",[
  [126.22,8,3,"Entrar","Domingo es del Sol: hoy vuelves a tu centro."],
  [126.22,7,10,"Centrarte","Quién eres cuando nadie te está pidiendo nada."],
  [528,8,4,"Descansar","Y descansa. Mañana es lunes y eso ya se verá."]]]
]);

mk("Duelo",[
 ["cic-28-los-primeros-dias","Los primeros días","Cuando acaba de pasar y no se puede ni pensar",[
  [396,6,4,"Respirar","No hay nada que hacer hoy. Solo respirar."],
  [136.1,5,16,"Estar",""],
  [432,6,5,"Un poco de aire","Cuando puedas, una respiración más honda. Nada más."]]],
 ["cic-29-hablarle","Hablarle","Para decirle lo que no alcanzaste a decir",[
  [639,7,4,"Traerlo","Trae a esa persona. Siéntala frente a ti."],
  [639,6,12,"Decirlo","Dile lo que no dijiste. En voz alta si puedes, aunque se quiebre."],
  [963,7,5,"Dejarlo ir","Ya está dicho. Déjalo irse por hoy."]]],
 ["cic-30-el-dia-que-duele-mas","El día que duele más","Un cumpleaños, un aniversario, una fecha",[
  [396,7,4,"Reconocer la fecha","Hoy es ese día. Claro que duele."],
  [639,6,12,"Recordar","Trae un recuerdo bueno. Uno solo, completo, con detalles."],
  [528,7,5,"Agradecer","Agradece que existió."]]],
 ["cic-31-cuando-ya-no-se-nota-afuera","Cuando ya no se nota afuera","Meses después, cuando el mundo siguió y tú no",[
  [396,7,4,"Nombrarlo","Los demás siguieron. Tú todavía no. Eso es normal y nadie te lo dice."],
  [136.1,5,12,"Permitirte","No tienes que estar bien en el plazo de nadie."],
  [528,8,5,"Un paso","Una cosa pequeña que sí puedes hacer hoy."]]],
 ["cic-32-duelo-que-no-es-muerte","Duelo que no es muerte","Una separación, un trabajo, una casa, una etapa",[
  [396,7,4,"Nombrarlo","Esto también es duelo, aunque nadie lo llame así."],
  [417,6,12,"Despedirlo","Despídete de eso como si fuera una persona. Porque fue parte de ti."],
  [963,7,5,"Cerrar","Lo que termina deja espacio, aunque hoy el espacio duela."]]],
 ["cic-33-seguir","Seguir","Para cuando empieza a doler menos y da culpa",[
  [639,7,4,"La culpa","Sentirte mejor no es traicionar a nadie."],
  [528,8,10,"Permiso","Date permiso de volver a reírte."],
  [963,8,5,"Llevarlo","Lo que amaste se va contigo, no se queda atrás."]]]
]);


/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Fases de la luna","Zodiaco","Días planetarios","Duelo"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
