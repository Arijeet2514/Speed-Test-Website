window.addEventListener('load',init);

const levels={
    easy:5,
    medium:3,
    hard:1
};

const currentLevel=levels.easy;

let time=currentLevel;
let score=0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const seconds = document.querySelector('#seconds');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');

const words = ['rub',
'advice',
'stir',
'muddled',
'calculate',
'snatch',
'snobbish',
'signal',
'bomb',
'bump',
'scold',
'pickle',
'gabby',
'worthless',
'craven',
'brake',
'observe',
'record',
'pointless',
'acid',
'burn',
'future',
'lumpy',
'friendly',
'belligerent',
'exchange',
'son',
'curved',
'wrong',
'stroke',
'visitor',
'flowery',
'store',
'rake',
'woozy',
'well-made',
'aback',
'crash',
'treatment',
'remain',
'grip',
'wine',
'punish',
'haircut',
'rightful',
'fireman',
'boy',
'tangible',
'eye',
'gun'];

function init(){
    seconds.innerHTML=currentLevel;
    showWord(words);
    wordInput.addEventListener('input',startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function startMatch(){
    if(matchwords()){
        isPlaying=true;
        time=currentLevel+1;
        showWord(words);
        wordInput.value=''
        score++;
    }
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }else{
    scoreDisplay.innerHTML=score;
    }
}

function matchwords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML='Correct!!!'
        return true;
    }
    else{
        message.innerHTML='';
        return false;
    }
}

function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown(){
    if(time>0){
        time--;
    }else if(time===0){
        isPlaying=false;
    }
    timeDisplay.innerHTML=time;
}

function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML = "Game Over !!!";
        score=-1;
    }
}