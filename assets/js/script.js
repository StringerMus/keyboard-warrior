//challenge sentences
const sentence = [
    "Love you to the moon and back","Don't count your chickens before they hatch","A bird in the hand is worth two in the bush","Slow and steady wins the race",
    "Stop beating around the bush","The ball is in your court","Don't judge a book by its cover","You can't make an omelette without breaking a few eggs","You can lead a horse to water but you can't make it drink",
    "Those who live in glass houses shouldn't throw stones","Out of the frying pan and into the fire","Know which way the wind is blowing","It is always darkest before the dawn",
    "A poor workman who blames his tools","Hear it straight from the horse's mouth","He who laughs last laughs loudest","An apple a day keeps the doctor away"
];

//timer variables
let startTime;
let stopwatchInterval;
let elapsedPausedTime = 0;

let shuffle = sentence[Math.floor(Math.random() * sentence.length)]; //randomise sentences
let challengeWord = document.getElementById('challenge-word');
let userInput = document.getElementById('user-input');
let playAgainDiv = document.getElementById('play-again');
let form = document.getElementById('challenge-form');

challengeWord.innerHTML = shuffle;

//validate user entry against the challenge
function handleSubmit(event) {
    event.preventDefault();
    let userEntry = form.elements['user-input'].value;
    
    //if the user types the challenge incorrectly
    if (userEntry !== shuffle) {
      const errorDiv = document.getElementById('errors');
      errorDiv.innerHTML = "<p>Uh oh...your entry did not match the challenge. Try again! but make sure you have spelt everything correctly, including punctuations and uppercase.</p>";
      errorDiv.style.display = 'block';
      //if the challenge is correctly typed
    } else {
      const successDiv = document.getElementById('success');
      successDiv.innerHTML = `<p>Yay! You have typed "${shuffle}" correctly!</p>`;
      successDiv.style.display = 'block';
    }
    userInput.disabled = true; //disable input field afer submission
    playAgainDiv.innerHTML = `Play Again <i class="fa-solid fa-rotate-right"></i>`;//play again appears after submission
    playAgainDiv.style.display = 'block';
  }
  
  form.addEventListener('submit', handleSubmit);

//Stopwatch
// Code for the stopwatch has been sourced from www.educative.io - edited for use on this project

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1); // update every second
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval); // stop the interval
  elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
  stopwatchInterval = null; // reset the interval variable
}

function resetStopwatch() {
  stopStopwatch(); // stop the interval
  elapsedPausedTime = 0; // reset the elapsed paused time variable
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

//function calculates time
function updateStopwatch() {
  let currentTime = new Date().getTime(); //get current time in milliseconds
  let elapsedTime = currentTime - startTime; //calculate elapsed time in milliseconds
  const milliseconds = Math.floor(elapsedTime / 1) % 60;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  let displayTime = pad(minutes) + ":" + pad(seconds) + ":" + pad(milliseconds);
  document.getElementById("stopwatch").innerHTML = displayTime;
}

function pad(number) {
  //add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}

userInput.addEventListener('keypress', startStopwatch); //Timer start tiggers when user starts typing in input field
form.addEventListener('submit', stopStopwatch); //Timer stop tiggers when user submits

//restart game
function replayGame (){
  resetStopwatch()
  document.getElementById('errors').style.display = "none";
  document.getElementById('success').style.display = "none";
  userInput.disabled = false; //makes input field active again
  form.reset(); //clears input field
  playAgainDiv.style.display = "none";
  //shuffles challenge
  shuffle = sentence[Math.floor(Math.random() * sentence.length)];
  challengeWord = document.getElementById('challenge-word');
  challengeWord.innerHTML = shuffle;
}

playAgainDiv.addEventListener("click", replayGame);