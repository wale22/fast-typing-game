window.addEventListener("load",init);
//DOM ELEMENTS
const sec= document.querySelector(".seconds");
const currentWord= document.querySelector(".current-word");
const inputBar= document.querySelector("#wordInput");
const text= document.querySelector("#message");
const timeLeft= document.querySelector("#time");
const curscore= document.querySelector("#score");

//GLOBALS

//available levels
const levels={
    easy:7,
    medium:4,
    hard:3,
}
let currentlevel;
var lengthof=currentWord.innerHTML.length;
console.log(lengthof);
    if (lengthof<=3) {
        currentlevel=levels.hard;
    }else if(lengthof>3 && lengthof<=7){
        currentlevel=levels.medium;
    }else if(lengthof>7){
        currentlevel=levels.medium;

    }




let time=currentlevel;
let score=0;
let isplaying;

// words

const words
   =[
    "hat",
    "river",
    "lucky",
    "statue",
    "generate",
    "stubborn",
    "cocktail",
    "runaway",
    "joke",
    "developer",
    "establishment",
    "Tower",
    "miracle",
    "javascript",
    "wale",
    "revolver",
    "investigate",
    "horrendous",
    "symptoms",
    "laughter",
    "echo",
]; 


// initialize game
function init() {
    //load word from array
    shoWord(words);
    //start matching on input
     inputBar.addEventListener("input",startMatch)
    //call every seconds
    setInterval(countdown,1000);
    //check status
   setInterval(checkstatus,50 ) ;

}


//start match

function startMatch() {
    if (matchwords()) {
        isplaying=true;
        time=6;
        shoWord(words);
        inputBar.value="";
        score+=5;
        curscore.innerHTML=score;
    }
}

function matchwords() {
    if (inputBar.value === currentWord.innerHTML ) {
        text.innerHTML="correct!!!"
        return true
    }else{
        text.innerHTML="wrong!!!"
        return false 
    }
}
function shoWord(words){
    //generate random array index

    let randind=Math.floor(Math.random()*words.length);

    //output random word

    currentWord.innerHTML=words[randind];
}


//count down timer

function countdown() {
    // make sure time is not ran out
    if (time>0) {
        //decrement
        time--  
    }else if(time==0){
        //game is over
        isplaying=false;
        curscore.innerHTML=0;
    }

    //show time
    timeLeft.innerHTML=time; 
}

function checkstatus() {
    if(!isplaying && time===0){
        text.innerHTML="Game Over!!!";   
    }
}; 


