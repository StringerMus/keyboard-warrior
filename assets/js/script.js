//challenge sentences
let sentence = ["once in a blue moon","a piece of cake","easier said than done","actions speak louder than words","beat around the bush","the ball is in your court"]

//randomise sentences
let shuffle = Math.floor(Math.random() * sentence.length);
console.log(shuffle, sentence[shuffle]);

function challenge (){
    document.getElementById('challenge-word').shuffle;
}



//time triggers
let startTime = new Date();
let endTime = new Date();
let timeTaken = endTime - startTime;

//event trigger
function keyPressed (event) {
    startTime = document.getElementById('type-box');
    startTime.innerHTML = event.key;
}

//validate spelling