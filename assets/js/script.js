//challenge sentences
let sentence = [
    "Love you to the moon and back","Don't count your chickens before they hatch","A bird in the hand is worth two in the bush","Slow and steady wins the race",
    "Stop beating around the bush","The ball is in your court","You can't judge a book by its cover"
];

//randomise sentences
let shuffle = sentence[Math.floor(Math.random() * sentence.length)];

let challengeWord = document.getElementById('challenge-word');
challengeWord.innerHTML = shuffle;

//validate user entry against challenge
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
      successDiv.innerHTML = `<p>Yay!\nYou have typed\n"${shuffle}"\nin time!</p>`;
      successDiv.style.display = 'block';;
    }
  }
  
  let form = document.getElementById('challenge-form');
  form.addEventListener('submit', handleSubmit);


