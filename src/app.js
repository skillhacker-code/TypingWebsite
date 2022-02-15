const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");
const speed=document.getElementById('speed')
let quoteWordLength;
let quoteWords


quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  const inputWords= quoteInputElement.value.split(' ')


  let correctWordsTyped=0
  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    quoteWordLength = quoteInputElement.value.split;

    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });

  if (correct) {
    quoteWords.forEach(word=>{
      console.log(inputWords.includes(word))
      correctWordsTyped+=1
      
    })
    let wordsPerMin=Math.floor(correctWordsTyped/(timer.innerText/60))
    speed.innerText=wordsPerMin
    console.log()
    renderNextQuote();
  }

  
  








});







function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderNextQuote() {
  const quote = await getRandomQuote();
  quoteWords=quote.split(' ')
  quoteDisplayElement.innerText = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    // characterSpan.classList.add('correct')
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });

  quoteInputElement.value = null;
  startTimer();
}



renderNextQuote();

let startTime;
function startTimer() {
  startTime = new Date();
  timerElement.innerText = 0;
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

