// - Write -

const phraseContent = document.getElementById('phrase');

const phrases = [
  'Hola Kei 😊.',
  '¿Cómo estuvo tu día?... espero que bien.',
  'Hice esta carta web para expresarte de alguna manera lo que siento. Espero te guste.',
  '...',
  'El primer día en el cual te conocí, o más bien, la primer noche... fue raro. Una chica se me queda mirando por unos instantes, y luego sigue su camino.',
  'Una chica que por alguna razón me había llamado la atención. Fue como la química del momento.',
  'La noche seguía y la música estaba en su tono. No podía quitarte de mi cabeza.',
  'Te veía pasar varias veces, por el norte, sur, este y oeste.. no dejabas de brillar.',
  'De repente, dejaste de pasar, no sabía si te habías ido o si seguías allí. La única forma de saberlo era buscándote.',
  'Dí decenas de vueltas buscando a aquella chica que había robado mi atención. Esos ojos bellos, un cabello largo y bonito, unos labios dulces como la miel...',
  'Tenía tantas ganas de acercarme a tí. Pero no podía...',
  '¿Tenía si quiera una mínima oportunidad con una chica tan linda?',
  'Y entonces pensé... ¿Por qué hago esto?, ¿Por qué me esfuerzo por una chica de las decenas que hay ahí?, ¿Por qué simplemente no puedo ir y hablarle?',
  '¿Por qué cuándo la veo bailar, mi corazón se acelera?, ¿Por qué la veo como si fuera la única persona?, ¿Por qué este sentimiento?',
  '...',
  'Aquello que en un principio fue raro... no era raro de RARO... después de pensarlo una y otra vez, me dí cuenta... de que era AMOR A PRIMERA VISTA!',
  'Wow!',
  'Lo sé, hasta para mí suena loco. Núnca me había sucedido, pero todas las respuestas apuntaban a ello.',
  'A lo que quiero llegar con todo esto, es que...',
  'Estoy realmente enamorado de vos. Pero, entiendo que tú también necesitas pensarlo y descubrir si soy o no la persona ideal para vos.',
  'Conocerme más para saber quién soy. Conocermnos... yo también quiero conocer más a la persona de quien me enamoré',
  'Se que una carta no es suficiente para expresar TODO lo que siento, pero almenos puedo darte un vistazo de cómo me estoy sintiendo estos últimos días',
  'Espero que pronto podamos hablar del tema... me gustaría saber, ¿Cómo te sientes vos con respecto a esto?',
  'Eso es todo por ahora, gracias si llegaste hasta acá, jsjs.',
  'Y recuerda, ¡Te Quiero Muchísimo Keila!, demasiado en tan poco tiempo ❤️.',
  'Atentamente y con amor: Román 🤭.'
];

let i = 0;
let j = 0;
let currentPhrase = [];
let currentState = true;

function toWrite() {
  if (i < phrases.length) {
    if (j < phrases[i].length && currentState) {
      currentPhrase.push(phrases[i][j]);
      phraseContent.innerHTML = currentPhrase.join('');
      j++;

      if (j === phrases[i].length) {
        i === phrases.length - 1 ? i++ : currentState = false;
      }

    } else if (j <= phrases[i].length && !currentState) {
      j--;
      currentPhrase.pop(phrases[i][j]);
      phraseContent.innerHTML = currentPhrase.join('');

      if (j === 0) {
        currentState = true;
        i++;
      }
    }
  }
  currentState ? setTimeout(toWrite, 140) : setTimeout(toWrite, 40);
}

// - Sound -

let sound = new Audio('./erestu.mp3')

sound.autoplay = true;
sound.loop = true;

function play() {
  sound.paused ? sound.play() : sound.pause();
}

// - Start -

const startButton = document.getElementById('start');

function start() {
  play();
  setTimeout(toWrite, 900);
  startButton.style.display = 'none';
}