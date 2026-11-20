/* Lily Frequency · Caminos del alma
   Portado de la zona de miembros de la web. Cada paso conserva su texto guiado. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Números angelicales",[
 ["cam-01-111-portal-abierto","111 · Portal abierto","Cuando lo ves por todos lados. Señal de que lo que piensas se está sembrando rápido",[
  [432,10,2,"Notar","Lo estás viendo seguido. Eso no es casualidad: es tu atención despierta."],
  [528,8,6,"Limpiar el pensamiento","Si todo se siembra rápido, cuida qué estás sembrando. Escucha qué te estás diciendo hoy."],
  [963,7,3,"Elegir","Elige una sola frase para pensar el resto del día. Esa se siembra."]]],
 ["cam-02-222-paciencia-y-equilibrio","222 · Paciencia y equilibrio","Para cuando vas bien pero sientes que no avanza",[
  [432,9,3,"Soltar la prisa","Lo que está pasando no se ve todavía. Eso no quiere decir que no esté pasando."],
  [639,7,7,"Sostener","Tu trabajo ahora no es empujar: es sostener. Respira como quien espera, no como quien corre."],
  [528,8,3,"Confiar","Déjalo cocinarse."]]],
 ["cam-03-333-acompanada","333 · Acompañada","Señal de apoyo. Para los días en que te sientes sola en esto",[
  [396,8,3,"Reconocer","Hoy pesa. Decirlo no te hace débil."],
  [639,7,8,"Rodearte","Trae a la mente a tres que sí te sostienen. Uno por uno, con cara y nombre."],
  [528,8,3,"Pedir","Si necesitas ayuda, hoy la pides. Esa es la práctica."]]],
 ["cam-04-444-piso-firme","444 · Piso firme","Cuando todo se siente inestable. La de la protección y la estructura",[
  [396,7.83,3,"Pies","Pies planos en el suelo. Siente los cuatro apoyos de cada pie."],
  [174,7.83,8,"Estructura","Lo que está firme en tu vida, nómbralo. Hay más de lo que ves cuando tienes miedo."],
  [136.1,7.83,4,"Anclar","Raíz abajo. Nada se cae hoy."]]],
 ["cam-05-555-viene-cambio","555 · Viene cambio","Para sostener el cambio sin pelearlo",[
  [432,10,3,"Nombrarlo","Algo se está moviendo. No lo detengas con la mente."],
  [417,8,8,"Abrir las manos","Si vienes apretando, no cabe lo nuevo. Abre las manos, literal."],
  [528,9,3,"Dar el paso","Un solo paso hoy, hacia eso que ya sabes."]]],
 ["cam-06-666-volver-al-centro","666 · Volver al centro","Cuando te fuiste demasiado hacia lo material o hacia la preocupación",[
  [432,10,3,"Ver dónde estás","¿En qué se te fue la cabeza esta semana?"],
  [639,8,7,"Equilibrar","Lo material importa y no es todo. Las dos cosas a la vez."],
  [528,8,3,"Reacomodar","Una cosa que vas a mover mañana para equilibrar."]]],
 ["cam-07-777-vas-bien","777 · Vas bien","Confirmación. Para cuando dudas si vas por buen camino",[
  [528,9,3,"Mirar atrás","Mira de dónde saliste. No lo minimices."],
  [639,8,7,"Reconocerte","Di en voz baja tres cosas que hiciste bien este mes."],
  [963,7,3,"Seguir","Mismo rumbo. No cambies por miedo."]]],
 ["cam-08-888-abundancia-en-camino","888 · Abundancia en camino","Flujo que se abre. Tu número",[
  [432,9,3,"Abrir","Abundancia no es solo dinero: es todo lo que llega sin que lo persigas."],
  [528,8,8,"Recibir","Lo que cuesta no es pedir, es recibir. Practica recibir ahora, sin devolver nada."],
  [963,8,4,"Dejar correr","Lo que entra fluye y lo que sale también. Las dos puertas abiertas."]]],
 ["cam-09-999-cierre-de-ciclo","999 · Cierre de ciclo","Algo termina. Para despedirlo bien",[
  [396,7,4,"Nombrar lo que termina","Dilo claro, aunque duela."],
  [639,6,8,"Agradecer","Qué te dejó. Hasta lo difícil dejó algo."],
  [963,8,4,"Cerrar","Cierra la puerta sin azotarla. Lo nuevo entra por otra."]]],
 ["cam-10-000-vuelta-a-empezar","000 · Vuelta a empezar","Punto cero. Para arrancar de nuevo sin arrastrar",[
  [396,6,4,"Vaciar","Deja ir lo que traías. Todo. Por diez minutos no eres nada de lo que fuiste."],
  [136.1,5,8,"Silencio",""],
  [963,8,4,"Primera forma","Ahora sí: ¿qué quieres que sea lo primero?"]]],
 ["cam-11-1010-despertar","1010 · Despertar","Señal de que algo se está dando cuenta en ti",[
  [432,8,3,"Lo que ya viste","Hay algo que ya sabes y todavía no quieres saber. Déjalo acercarse."],
  [741,6,8,"Mirarlo","No tienes que hacer nada con eso hoy. Solo mirarlo de frente."],
  [963,8,3,"Guardar","Escríbelo cuando termine."]]],
 ["cam-12-1111-el-portal","1111 · El portal","El más conocido. Para pedir con precisión",[
  [432,10,2,"Una sola cosa","Una. No diez. Elige."],
  [528,8,6,"Verlo hecho","No lo pidas: míralo ya cumplido y siente cómo se siente."],
  [963,7,3,"Soltar","Suéltalo. Lo que se sostiene apretado no se mueve."]]],
 ["cam-13-1212-camino-en-construccion","1212 · Camino en construcción","Vas armando algo. Para no desesperar a medio camino",[
  [432,9,3,"Dónde vas","Trae la imagen de hacia dónde vas. Claramente."],
  [639,8,8,"Lo que falta","Una pieza a la vez. ¿Cuál es la de esta semana?"],
  [528,9,3,"Paso","Hazla. Nada más esa."]]],
 ["cam-14-1234-secuencia","1234 · Secuencia","Las cosas en orden, una tras otra. Para cuando quieres todo a la vez",[
  [432,10,3,"Ordenar","Escribe lo que quieres. Ahora numéralo por lo que va primero."],
  [528,9,7,"Uno","Solo el uno existe hoy. Los demás esperan."],
  [639,9,3,"Avanzar","El dos llega cuando el uno esté."]]],
 ["cam-15-1133-tu-voz","1133 · Tu voz","Para decir algo que llevas callando",[
  [741,8,3,"Encontrarlo","¿Qué no has dicho? ¿A quién?"],
  [741,7,8,"Ensayar","Dilo aquí primero, en voz baja. Completo, sin ablandarlo."],
  [639,8,4,"Prepararlo","Decide cuándo lo vas a decir de verdad."]]],
 ["cam-16-1144-trabajo-que-rinde","1144 · Trabajo que rinde","Para el esfuerzo que todavía no da fruto",[
  [432,10,3,"Reconocer el esfuerzo","Has trabajado. Dilo sin minimizarlo."],
  [174,8,7,"Sostener","Lo que construyes toma el tiempo que toma."],
  [528,9,3,"Seguir","Mañana otra vez."]]],
 ["cam-17-1155-transformacion","1155 · Transformación","Cambio grande, de los que no se deshacen",[
  [396,7,4,"Lo que se va","Algo tuyo está terminando. Déjalo."],
  [417,6,8,"El hueco","Entre lo que se fue y lo que viene hay un hueco. Quédate ahí sin llenarlo."],
  [963,8,4,"Lo que llega","No lo definas todavía."]]],
 ["cam-18-1222-confianza","1222 · Confianza","Para la etapa en que solo hay que no estorbar",[
  [432,9,3,"Soltar el control","Lo que puedes hacer, ya lo hiciste."],
  [639,7,8,"Dejar obrar","Respira. No todo depende de ti y eso es un alivio, no una derrota."],
  [528,8,3,"Descansar","Hoy descansas sin culpa."]]],
 ["cam-19-1313-proteccion-en-el-cambio","1313 · Protección en el cambio","Cuando el cambio da miedo",[
  [396,8,3,"Nombrar el miedo","Qué es exactamente lo que temes. Específico."],
  [963,7.83,8,"Blindar","Luz dorada rodeándote. El cambio pasa, tú te quedas."],
  [528,8,4,"Avanzar con él","Puedes tener miedo y avanzar al mismo tiempo."]]],
 ["cam-20-1414-paciencia-activa","1414 · Paciencia activa","Esperar haciendo, no esperar quieta",[
  [432,10,3,"Qué sí puedes","Hay algo pequeño en tus manos hoy."],
  [528,9,7,"Hacerlo","Eso. Mientras lo otro se acomoda."],
  [639,8,3,"Soltar lo demás","Lo que no está en tus manos, no es tuyo hoy."]]],
 ["cam-21-1515-suelta-y-vuela","1515 · Suelta y vuela","Para dejar ir algo que ya no te queda",[
  [396,8,4,"Verlo","Eso que ya no te queda. Míralo con cariño."],
  [417,7,8,"Soltar","Lo agradeces y lo sueltas. No lo discutas."],
  [963,8,4,"Espacio","Mira el espacio que quedó. Está bien que esté vacío un rato."]]],
 ["cam-22-1717-intuicion-encendida","1717 · Intuición encendida","Para confiar en lo que estás sintiendo",[
  [639,9,3,"Bajar al cuerpo","La respuesta no está en la cabeza hoy."],
  [852,6,9,"Escuchar","Pregunta y espera. Lo primero que llegue, sin corregirlo."],
  [963,8,3,"Anotarlo","Escríbelo antes de que la mente lo edite."]]],
 ["cam-23-1818-cosecha","1818 · Cosecha","Para cuando empieza a llegar lo que sembraste",[
  [528,9,3,"Verlo","Está llegando. Permítete verlo."],
  [639,8,7,"Recibir sin culpa","Te lo ganaste. No lo minimices para que nadie se incomode."],
  [963,8,3,"Agradecer","Y agradece en voz alta."]]],
 ["cam-24-2222-alineacion","2222 · Alineación","Todo acomodándose. Para no moverlo de más",[
  [432,9,3,"Quieta","Las cosas se están acomodando solas. No metas mano."],
  [136.1,7,8,"Confiar",""],
  [528,8,3,"Dejar","Mañana sigue acomodándose sin ti."]]]
]);

mk("Arcángeles",[
 ["cam-25-miguel-corte-y-proteccion","Miguel · Corte y protección","Para cortar lo que te drena y ponerte a salvo",[
  [396,7.83,3,"Llamar","Pide protección en voz baja, con tus palabras."],
  [741,7,8,"Cortar","Lo que te está jalando, córtalo. Imagina la espada de luz azul bajando entre tú y eso."],
  [963,7.83,4,"Sellar","Luz azul rodeándote completa. Lo que no es amor no entra."]]],
 ["cam-26-rafael-acompanamiento-en-la-dolenc","Rafael · Acompañamiento en la dolencia","Para acompañar un proceso. No sustituye a tu médico",[
  [528,7,3,"Llegar","Lleva la atención al lugar que te preocupa. Sin pelearlo."],
  [528,6,9,"Luz verde","Luz verde esmeralda envolviéndolo. No lo empujes: déjalo estar ahí."],
  [639,7,4,"Soltar","Suelta el control sobre el resultado."]]],
 ["cam-27-gabriel-el-mensaje","Gabriel · El mensaje","Para decir o escribir algo importante",[
  [741,9,3,"Claridad","Qué quieres decir, en una sola frase."],
  [741,7,8,"La voz","Imagina luz blanca llenando tu garganta. Ahí vive lo que no has dicho."],
  [639,8,3,"Decirlo","Ensáyalo en voz alta ahora."]]],
 ["cam-28-uriel-la-idea-que-falta","Uriel · La idea que falta","Para destrabar un problema",[
  [432,10,3,"Plantear","Di el problema una vez, claro."],
  [852,6,10,"Dejar venir","Luz dorada en la cabeza. No pienses: deja que llegue."],
  [963,8,3,"Recoger","Lo primero que apareció, anótalo."]]],
 ["cam-29-chamuel-encontrar","Chamuel · Encontrar","Para lo que se perdió: una cosa, una persona, un rumbo",[
  [432,9,3,"Nombrar","Qué buscas. Dilo."],
  [639,7,8,"Luz rosa","Luz rosa expandiéndose desde tu pecho hacia afuera, buscando."],
  [528,8,4,"Confiar","Lo que es tuyo te encuentra."]]],
 ["cam-30-jofiel-belleza","Jofiel · Belleza","Para los días en que todo se ve feo",[
  [528,9,3,"Notar","Una sola cosa bonita cerca de ti ahora. Búscala."],
  [528,8,8,"Luz amarilla","Luz amarilla entrando. Lo bonito ya estaba, tú no lo estabas viendo."],
  [639,8,3,"Guardar","Llévate esa imagen."]]],
 ["cam-31-zadquiel-perdonar","Zadquiel · Perdonar","Para soltar un rencor que te pesa más a ti",[
  [396,7,4,"Traerlo","Trae a esa persona. No para justificarla: para soltarte tú."],
  [417,6,10,"Llama violeta","Fuego violeta entre tú y eso, transmutando. No perdonas el hecho: sueltas la carga."],
  [639,7,4,"Soltar","Si todavía no puedes, está bien. Hoy avanzaste."]]],
 ["cam-32-haniel-ciclo-femenino","Haniel · Ciclo femenino","Para acompasarse con la luna y el propio ciclo",[
  [432,8,3,"Dónde estás","En qué parte de tu ciclo estás. Del cuerpo o de la vida."],
  [174,6,9,"Luz de luna","Luz plateada bajando. No exijas lo mismo todos los días."],
  [963,7,4,"Permitir","Hoy puedes ir al ritmo que vas."]]],
 ["cam-33-ariel-provision","Ariel · Provisión","Para la preocupación por lo que falta",[
  [432,9,3,"Nombrar la falta","Qué es lo que falta. Concreto."],
  [528,8,8,"Sostén","Luz rosa pálido. Lo que necesitas ha llegado antes y volverá a llegar."],
  [963,8,4,"Abrir","Suelta el puño. Recibir necesita manos abiertas."]]],
 ["cam-34-metatron-orden-interno","Metatrón · Orden interno","Para cuando la cabeza es un desorden",[
  [432,10,3,"Vaciar","Saca todo lo que traes. Dilo o escríbelo sin ordenar."],
  [963,7,9,"Geometría","Luz en patrón ordenado acomodándolo todo. Cada cosa a su lugar."],
  [528,9,4,"Lo primero","De todo eso, ¿qué va primero?"]]],
 ["cam-35-sandalfon-oracion-y-musica","Sandalfón · Oración y música","Para pedir cantando o en silencio",[
  [432,8,3,"Formular","Qué pides. Sin adornos."],
  [528,7,9,"Elevarlo","Déjalo subir. Si quieres, tararea algo sobre el sonido."],
  [963,7,4,"Soltarlo","Ya está dicho."]]],
 ["cam-36-raziel-lo-que-no-se-ve","Raziel · Lo que no se ve","Para entender algo que todavía no entiendes",[
  [432,8,3,"La pregunta","Formúlala. Una sola."],
  [852,5,10,"Dejar abrir","No busques la respuesta. Deja que la pregunta se abra sola."],
  [963,7,4,"Esperar","La respuesta puede llegar mañana, en la ducha. Está bien."]]],
 ["cam-37-azrael-despedir","Azrael · Despedir","Para un duelo. Acompaña, no quita",[
  [396,6,4,"Estar","No tienes que estar bien hoy."],
  [136.1,5,12,"Compañía",""],
  [639,6,5,"Un poco de aire","Cuando puedas, respira más hondo. Nada más que eso."]]],
 ["cam-38-raguel-reparar-un-vinculo","Raguel · Reparar un vínculo","Para una relación que quedó áspera",[
  [432,9,3,"Traerla","Trae a esa persona y la conversación pendiente."],
  [639,7,9,"Ver su lado","Por un momento míralo desde donde ella está. No para darle la razón."],
  [528,8,4,"Decidir","Qué vas a hacer tú. Lo que esté en tus manos."]]]
]);

mk("Ho'oponopono",[
 ["cam-39-las-cuatro-frases","Las cuatro frases","Lo siento, perdóname, gracias, te amo. La práctica base",[
  [432,8,3,"Llegar","Trae a la mente lo que quieres limpiar. Una situación, una persona, algo tuyo."],
  [528,7,10,"Repetir","Lo siento. Perdóname. Gracias. Te amo. Despacio, en ese orden, una y otra vez."],
  [963,7,4,"Soltar","Deja de repetir. Quédate en el silencio que queda."]]],
 ["cam-40-limpiar-contigo-misma","Limpiar contigo misma","La versión más difícil: dirigida a ti",[
  [432,8,3,"Mirarte","Trae tu propia cara a la mente. Como te ves al espejo."],
  [528,7,12,"Decírtelo","Lo siento. Perdóname. Gracias. Te amo. A ti. No a otro: a ti."],
  [639,7,4,"Recibir","Déjate recibirlo. Esa es la parte que cuesta."]]],
 ["cam-41-limpiar-una-relacion","Limpiar una relación","Para alguien con quien algo quedó",[
  [432,8,3,"Traerla","Trae a esa persona. No le hables: solo mírala."],
  [639,7,12,"Las frases","Lo siento. Perdóname. Gracias. Te amo. No por lo que hizo: por lo que hay en ti sobre eso."],
  [963,7,4,"Dejarla ir","Déjala irse de tu mente, limpia."]]],
 ["cam-42-limpiar-el-dinero","Limpiar el dinero","Para la relación con lo que entra y lo que falta",[
  [432,9,3,"La memoria","Qué te enseñaron del dinero. Lo que oíste de niña."],
  [528,8,12,"Limpiar","Las cuatro frases dirigidas a esa memoria. No al dinero: a lo que crees de él."],
  [963,8,4,"Abrir","Suelta las manos."]]],
 ["cam-43-limpiar-el-cuerpo","Limpiar el cuerpo","Dirigido a la parte que no quieres",[
  [432,8,3,"Elegir","La parte de tu cuerpo con la que peleas."],
  [528,7,12,"Hablarle","Lo siento. Perdóname. Gracias. Te amo. A esa parte. Ha estado contigo todo el tiempo."],
  [639,7,4,"Quedarte","Pon la mano ahí y quédate."]]],
 ["cam-44-antes-de-una-conversacion-dificil","Antes de una conversación difícil","Diez minutos antes de hablar con alguien",[
  [432,9,2,"Traerla","Trae a la persona y lo que vas a decir."],
  [639,7,8,"Limpiar primero","Las cuatro frases antes de hablar. Vas a llegar distinta."],
  [528,8,3,"Entrar","Ahora sí ve."]]],
 ["cam-45-limpiar-la-casa","Limpiar la casa","Para el lugar donde vives",[
  [432,8,3,"Mirarla","Recorre tu casa en la mente, cuarto por cuarto."],
  [528,7,12,"Las frases","A la casa. Ha sostenido todo lo que pasó adentro."],
  [963,7,4,"Agradecer","Gracias por el techo."]]],
 ["cam-46-limpieza-de-la-noche","Limpieza de la noche","Para cerrar el día sin cargarlo a mañana",[
  [432,9,3,"Pasar el día","Repasa el día sin juzgarte."],
  [528,6,10,"Limpiar lo que quedó","Lo que te pesó, límpialo con las cuatro frases."],
  [136.1,4,5,"Dormir","Lo que quedó limpio no se va a la cama contigo."]]]
]);

mk("Mantras",[
 ["cam-47-om-el-sonido-base","Om · El sonido base","El mantra más antiguo. Para empezar cualquier práctica",[
  [136.1,7,3,"Sentarse","Espalda larga, ojos cerrados."],
  [136.1,6,10,"Entonar","Entona Om con el sonido. Siente dónde vibra: pecho, garganta, cabeza."],
  [136.1,5,4,"Silencio","Después del último Om, quédate en el silencio. Ahí está la práctica."]]],
 ["cam-48-om-mani-padme-hum","Om Mani Padme Hum","El mantra de la compasión. Tibetano",[
  [432,8,3,"Intención","Por quién lo haces hoy. Puede ser por ti."],
  [528,6,14,"Repetir","Om Mani Padme Hum. Despacio, con la respiración. Si la mente se va, vuelve a la sílaba."],
  [963,7,4,"Dedicar","Dedica lo que se movió."]]],
 ["cam-49-gayatri","Gayatri","Mantra del sol y de la claridad mental. Para la mañana",[
  [432,9,3,"Al amanecer","Si puedes, con luz natural. Si no, imagínala."],
  [528,8,12,"Entonar","Deja que la vibración ocupe la cabeza."],
  [639,9,4,"Abrir el día","Sal de aquí despierta."]]],
 ["cam-50-so-ham-yo-soy","So Ham · Yo soy","Se dice con la respiración, no con la voz",[
  [432,8,3,"Encontrar el ritmo","Al inhalar: So. Al exhalar: Ham. Sin voz, solo mentalmente."],
  [136.1,6,14,"Sostener","So al entrar. Ham al salir. Nada más que eso."],
  [136.1,5,4,"Soltar la sílaba","Deja las palabras. Queda la respiración sola."]]],
 ["cam-51-om-namah-shivaya","Om Namah Shivaya","Para soltar lo viejo. Mantra de transformación",[
  [396,8,3,"Qué sueltas","Nombra lo que quieres que se vaya."],
  [417,6,14,"Repetir","Om Namah Shivaya."],
  [963,7,4,"Vacío","Lo que se fue dejó espacio."]]],
 ["cam-52-ra-ma-da-sa","Ra Ma Da Sa","Mantra kundalini de acompañamiento. Se canta por alguien",[
  [528,8,3,"Por quién","Trae a esa persona a tu mente. Puedes ser tú."],
  [528,6,14,"Entonar","Ra Ma Da Sa, Sa Say So Hung."],
  [639,7,4,"Enviar","Deja que lo que se movió viaje hacia esa persona."]]],
 ["cam-53-sat-nam","Sat Nam","Verdad es mi identidad. El más corto y el más usado",[
  [432,8,3,"Sentarse","Manos en las rodillas."],
  [528,7,12,"Repetir","Sat al inhalar, Nam al exhalar. Largo el Sat, corto el Nam."],
  [432,7,4,"Quedarte",""]]],
 ["cam-54-lokah-samastah","Lokah Samastah","Que todos los seres sean felices y libres. Para cerrar la práctica",[
  [639,8,3,"Abrir","Esto no es para ti sola."],
  [639,7,10,"Entonar","Lokah Samastah Sukhino Bhavantu."],
  [963,7,4,"Soltar","Que se vaya a donde tenga que ir."]]],
 ["cam-55-aad-guray-nameh","Aad Guray Nameh","Mantra de protección al salir de casa",[
  [396,7.83,2,"Antes de salir","Tres minutos antes de abrir la puerta."],
  [741,7.83,8,"Entonar",""],
  [963,7.83,3,"Puesta","Sal con eso encima."]]],
 ["cam-56-om-shanti","Om Shanti","Paz. Para cuando el cuerpo viene tenso",[
  [432,9,3,"Aflojar","Hombros, quijada, manos. Suelta las tres."],
  [528,7,12,"Repetir","Om Shanti Shanti Shanti."],
  [136.1,6,4,"Quedarte",""]]],
 ["cam-57-mantra-del-corazon","Mantra del corazón","Sin palabras: la mano en el pecho y el sonido",[
  [639,8,3,"Mano","Mano derecha en el centro del pecho. Siente el latido."],
  [528,6,12,"Vibrar","Deja que el sonido entre por ahí."],
  [639,7,4,"Retirar","Quita la mano despacio. El calor se queda."]]],
 ["cam-58-guru-ram-das","Guru Ram Das","Para pedir ayuda cuando ya no sabes qué hacer",[
  [396,8,3,"Rendirse","Hay momentos en que no sabes. Decirlo es el principio."],
  [528,6,14,"Entonar","Guru Guru Wahe Guru, Guru Ram Das Guru."],
  [963,7,4,"Esperar","La ayuda llega por donde no la buscabas."]]],
 ["cam-59-mantra-de-la-manana","Mantra de la mañana","Quince minutos para abrir el día",[
  [432,10,3,"Despertar","Siéntate antes de tocar el teléfono."],
  [528,9,9,"Entonar","Om, tres veces largas. Después Sat Nam con la respiración."],
  [639,10,3,"Salir","Ahora sí empieza el día."]]],
 ["cam-60-mantra-de-la-noche","Mantra de la noche","Para cerrar antes de dormir",[
  [432,8,3,"Soltar el día","Lo de hoy ya pasó."],
  [136.1,5,10,"Entonar","Om Shanti, cada vez más bajo."],
  [136.1,3,6,"Dormir",""]]],
 ["cam-61-japa-repeticion-larga","Japa · Repetición larga","Treinta minutos de una sola sílaba. Práctica de constancia",[
  [432,8,3,"Elegir","Elige tu mantra. Uno. No lo cambies a medio camino."],
  [528,6,24,"Repetir","Cada vez que la mente se vaya, vuelve sin regañarte. Irse y volver es la práctica."],
  [963,6,4,"Soltar","Deja de repetir. Escucha el eco."]]],
 ["cam-62-mantra-en-silencio","Mantra en silencio","Sin voz, solo mental. El más difícil y el más hondo",[
  [432,7,3,"Elegir","Un mantra corto."],
  [136.1,5,16,"Mentalmente","No lo digas. Piénsalo. Si pierdes el hilo, retómalo donde quedaste."],
  [136.1,4,4,"Quedarte",""]]]
]);

mk("Registros akáshicos",[
 ["cam-63-la-apertura","La apertura","Antes de cualquier consulta. Establecer el espacio",[
  [432,8,3,"Preparar","Siéntate derecha. Cuaderno a un lado. Teléfono lejos."],
  [852,6,7,"Pedir permiso","Pide permiso para entrar. Con tus palabras, en voz baja."],
  [963,6,4,"Esperar","No entres hasta que sientas que puedes. Si hoy no, hoy no."]]],
 ["cam-64-una-pregunta","Una pregunta","Para consultar una sola cosa con calma",[
  [432,8,3,"Formular","Una pregunta abierta. No de sí o no: de qué y cómo."],
  [852,5,14,"Escuchar","Pregunta y espera. Lo que llegue, llegue como llegue: palabra, imagen o sensación."],
  [963,7,4,"Anotar","Escribe antes de interpretar."]]],
 ["cam-65-sobre-una-relacion","Sobre una relación","Para entender un vínculo que se repite",[
  [432,8,3,"Traerla","Trae a la persona."],
  [639,5,14,"Preguntar","Qué vinimos a aprender juntas. Escucha sin defenderte."],
  [963,7,5,"Cerrar","Agradece, aunque la respuesta no te haya gustado."]]],
 ["cam-66-sobre-un-patron","Sobre un patrón","Para lo que se repite en tu vida y no sabes por qué",[
  [432,8,3,"Nombrarlo","Qué se repite. Sin adornarlo."],
  [852,5,14,"Mirar atrás","Pregunta de dónde viene. Deja que te muestren, no que te expliquen."],
  [528,6,5,"Soltar","Si duele, está bien. Respira y quédate."]]],
 ["cam-67-sobre-el-proposito","Sobre el propósito","La pregunta grande. Para hacerla despacio",[
  [432,8,4,"Preparar","Esta no se contesta rápido ni completa."],
  [852,5,16,"Preguntar","Para qué estoy aquí. Escucha fragmentos, no una frase."],
  [963,6,5,"Guardar","Anota lo que haya. Aunque sea una palabra."]]],
 ["cam-68-limpieza-de-linaje","Limpieza de linaje","Para lo que viene de atrás y no es tuyo",[
  [432,7,4,"Ver la línea","Imagina la línea de quienes vinieron antes de ti."],
  [396,5,14,"Devolver","Lo que cargas y no te corresponde, devuélvelo con respeto."],
  [963,7,5,"Cerrar","Lo tuyo se queda. Lo demás ya no."]]],
 ["cam-69-el-cierre","El cierre","Siempre al terminar. No lo saltes",[
  [639,7,3,"Agradecer","Agradece lo que llegó."],
  [963,7.83,5,"Cerrar","Pide cerrar. Siente cuando se cierra."],
  [432,9,3,"Volver","Mueve los dedos. Toma agua al terminar."]]],
 ["cam-70-consulta-completa","Consulta completa","Treinta minutos: apertura, pregunta y cierre",[
  [852,6,4,"Abrir","Permiso para entrar."],
  [136.1,5,6,"Asentar",""],
  [852,5,14,"Preguntar","Tu pregunta. Y después, silencio largo."],
  [639,6,4,"Agradecer",""],
  [963,7.83,3,"Cerrar","Cierra completo antes de levantarte."]]],
 ["cam-81-sobre-el-dinero","Sobre el dinero","Para el patrón con lo que entra y lo que se va. Abre, pregunta y cierra",[
  [432,8,3,"Abrir","Haz tu apertura como siempre. Hoy la consulta es sobre el dinero."],
  [852,5,12,"Preguntar","La pregunta no es cuánto voy a ganar. Es: qué aprendí de niña sobre el dinero, y de quién. Deja que venga la escena, no la explicación."],
  [963,7,5,"Cerrar","Cierra el registro. Lo que viste se queda trabajando solo."]]],
 ["cam-82-para-otra-persona-con-permiso","Para otra persona · con permiso","Consultar por alguien más. Solo con su permiso dicho en palabras: sin eso, no se abre",[
  [432,8,4,"El permiso","Antes de nada: esa persona te dio permiso. No lo supusiste, no lo diste por hecho porque la quieres. Te lo dijo. Si no te lo dijo, cierra aquí y no sigas."],
  [852,5,11,"Consultar","Pregunta lo que te pidió, con sus palabras, no con las tuyas. No preguntes lo que a ti te da curiosidad. No es tu registro."],
  [963,7,5,"Cerrar y entregar","Cierra. Lo que recibiste se lo cuentas a ella tal cual, sin interpretarlo de más y sin lo que tú opinas."]]]
]);

mk("Reiki",[
 ["cam-71-sesion-completa-12-posiciones","Sesión completa · 12 posiciones","Fondo para una sesión entera. Cambia de posición con cada aviso",[
  [528,7,3,"Centrarse","Manos juntas. Respira. Pide permiso al cuerpo que vas a tocar."],
  [963,6,5,"Cabeza","Manos sobre la frente y las sienes."],
  [741,6,5,"Garganta","Manos sin presionar, apenas apoyadas."],
  [639,6,5,"Corazón","Centro del pecho."],
  [528,6,5,"Plexo","Boca del estómago."],
  [417,6,5,"Sacro","Bajo vientre."],
  [396,7,5,"Raíz","Cadera y piernas."],
  [639,6,5,"Espalda alta","Si la persona se voltea."],
  [417,6,5,"Espalda baja",""],
  [174,7,5,"Pies","Cierra siempre por los pies."],
  [963,7.83,4,"Sellar","Pasa las manos por encima sin tocar, de cabeza a pies."],
  [432,9,3,"Cerrar","Lávate las manos cuando termine."]]],
 ["cam-72-autotratamiento","Autotratamiento","Para dártelo a ti misma. Veinte minutos",[
  [528,7,3,"Centrarte","Manos juntas."],
  [963,6,5,"Cabeza","Tus manos en tu frente."],
  [639,6,5,"Corazón",""],
  [528,6,5,"Plexo",""],
  [174,7,4,"Pies","Alcánzalos o imagina que los alcanzas."],
  [963,7.83,3,"Cerrar",""]]],
 ["cam-73-sesion-corta-20-minutos","Sesión corta · 20 minutos","Cuando no hay tiempo para la completa",[
  [528,7,2,"Centrarse",""],
  [639,6,6,"Cabeza y corazón",""],
  [528,6,6,"Plexo y sacro",""],
  [174,7,4,"Pies",""],
  [963,7.83,2,"Cerrar",""]]],
 ["cam-74-a-distancia","A distancia","Para enviar a alguien que no está contigo",[
  [528,7,3,"Traerla","Trae a esa persona completa a tu mente."],
  [639,6,14,"Enviar","Manos al frente, como sosteniéndola. Deja que vaya."],
  [963,7,4,"Soltar","Suelta. Lo que llegue, llegó."]]],
 ["cam-75-antes-de-dar-sesion","Antes de dar sesión","Para el terapeuta, cinco minutos antes",[
  [396,8,2,"Vaciarte","Lo tuyo se queda afuera."],
  [963,7.83,5,"Abrirte","Tú no das tu energía: dejas pasar."],
  [528,8,2,"Entrar","Ahora sí."]]],
 ["cam-76-despues-de-dar-sesion","Después de dar sesión","Para soltar lo que recogiste",[
  [741,8,3,"Reconocer","Lo que sientes puede no ser tuyo."],
  [396,6,6,"Devolver","Lo que no es mío lo suelto y lo regreso, con amor."],
  [528,7,4,"Recuperar","Y lo mío vuelve a mí, limpio."],
  [963,7.83,2,"Lavarte","Lávate las manos cuando acabe el audio."]]],
 ["cam-77-sesion-para-dormir","Sesión para dormir","Autotratamiento en la cama, para quedarte dormida adentro",[
  [528,7,3,"Acostada","Manos sobre el pecho."],
  [136.1,6,8,"Bajar",""],
  [136.1,3,14,"Dejarte ir",""]]],
 ["cam-78-limpieza-del-espacio-de-trabajo","Limpieza del espacio de trabajo","Para el cuarto donde das sesiones, entre paciente y paciente",[
  [741,0,3,"Abrir","Abre una ventana si puedes."],
  [639,0,6,"Recorrer","Pasa las manos por el espacio. Las esquinas primero."],
  [963,7.83,3,"Sellar","Cierra. El cuarto queda nuevo."]]],
 ["cam-79-para-dolor-localizado","Para dolor localizado","Acompañamiento, no tratamiento. Consulta a tu médico",[
  [528,7,3,"Localizar","Pon la mano donde duele, sin presionar."],
  [174,6,12,"Sostener","No empujes el dolor. Solo quédate ahí con la mano puesta."],
  [639,7,4,"Soltar","Quita la mano despacio."]]],
 ["cam-80-los-cinco-principios","Los cinco principios","Solo por hoy. La base del reiki, una por minuto",[
  [528,8,2,"Solo por hoy","No para siempre. Solo por hoy."],
  [396,7,3,"No te enojes","Solo por hoy, no me enojo."],
  [417,7,3,"No te preocupes","Solo por hoy, no me preocupo."],
  [639,7,3,"Agradece","Solo por hoy, agradezco."],
  [741,7,3,"Trabaja honestamente","Solo por hoy, trabajo con honestidad."],
  [963,7,3,"Sé amable","Solo por hoy, soy amable con todo ser vivo."]]]
]);


/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Números angelicales","Arcángeles","Ho'oponopono","Mantras","Registros akáshicos","Reiki"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();
