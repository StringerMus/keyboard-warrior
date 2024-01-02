//challenge sentences
let sentence = [
    "Love you to the moon and back","Don't count your chickens before they hatch","A bird in the hand is worth two in the bush","Slow and steady wins the race",
    "Stop beating around the bush","The ball is in your court","You can't judge a book by its cover"
];

//randomise sentences
let shuffle = sentence[Math.floor(Math.random() * sentence.length)];

let challengeWord = document.getElementById('challenge-word');
challengeWord.innerHTML = shuffle;

//validate
let form = document.getElementById('form');
entry.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // Prevent the form from being submitted
    event.preventDefault();
    let userInput = form.elements[entry].value;

    if (userInput !== shuffle) {
        let errorDiv = document.getElementById('errors');
        errorDiv.innerHTML = "<p>Uh oh...your entry does not match the challenge. Play again! but make sure you have typed it in correctly.</p>";
        errorDiv.style.display = 'block';
    }else {
        form.submit();
    }
}


