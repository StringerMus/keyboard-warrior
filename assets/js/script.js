//challenge sentences
let sentence = [
    "Love you to the moon and back","Don't count your chickens before they hatch","A bird in the hand is worth two in the bush","Slow and steady wins the race",
    "Stop beating around the bush","The ball is in your court","You can't judge a book by its cover"
];

//randomise sentences
let shuffle = sentence[Math.floor(Math.random() * sentence.length)];

let challengeWord = document.getElementById('challenge-word');
challengeWord.innerHTML = shuffle;

let userInput = document.getElementById('user-input');


//validate user entry against the challenge
function handleSubmit(event) {
    event.preventDefault();
    let userEntry = form.elements['user-input'].value;
    
    //if the user types the challenge incorrectly
    if (userEntry !== shuffle) {
      let errorDiv = document.getElementById('errors');
      errorDiv.innerHTML = "<p>Uh oh...your entry did not match the challenge. Play again! but make sure you have typed in correctly.</p>";
      errorDiv.style.display = 'block';
      //if the challenge is correctly typed
    } else {
      let successDiv = document.getElementById('success');
      successDiv.innerHTML = `<p>Yay! You have typed "${shuffle}" in 'Time'!</p>`;
      successDiv.style.display = 'block';
    }
  }
  
  let form = document.getElementById('challenge-form');
  form.addEventListener('submit', handleSubmit);


//Timer events

//JS Stopwatch Test
let startTime; // to keep track of the start time
let stopwatchInterval; // to keep track of the interval
let elapsedPausedTime = 0; // to keep track of the elapsed time while stopped

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
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
  document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
}

function updateStopwatch() {
  let currentTime = new Date().getTime(); // get current time in milliseconds
  let elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
  let milliseconds = Math.floor(elapsedTime / 1) % 60; // calculate seconds
  let seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
  let displayTime = pad(minutes) + ":" + pad(seconds) + ":" + pad(milliseconds); // format display time
  document.getElementById("stopwatch").innerHTML = displayTime; // update the display
}

function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}

//Timer start tiggers when user starts typing in input field
userInput.addEventListener('keypress', startStopwatch);
//Timer stop tiggers when user submits
form.addEventListener('submit', stopStopwatch);