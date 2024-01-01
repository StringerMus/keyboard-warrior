//challenge sentences
let sentence = [
    "Love you to the moon and back","Don't count your chickens before they hatch","A bird in the hand is worth two in the bush","Slow and steady wins the race",
    "Stop beating around the bush","The ball is in your court","You can't judge a book by its cover"
];

//randomise sentences
let shuffle = sentence[Math.floor(Math.random() * sentence.length)];

let challengeWord = document.getElementById('challenge-word');
challengeWord.innerHTML = shuffle;

