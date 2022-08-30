const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const fast = document.querySelector('#fast');
const slow = document.querySelector('#slow');
const restart = document.querySelector('#restart');

var quick = 0;

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('click', ()=>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
})

function moveMole(){
    timerId = setInterval(randomSquare, 500);
}

function reload(){
    restart.addEventListener('click', ()=>{
        quick = 0;
        location.reload();
    });
}

function faster(){
    fast.addEventListener('click', ()=>{
        if(quick == 1){
            alert('mais rapido que isso nem o flash consegue')
        }else{
            timerId = setInterval(randomSquare, 300);
            quick++;
        }
    })
}


moveMole();
reload();
faster();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert(`GAME OVER! Você fez ${result} pontos`);
    }
}

let countDownTimerId = setInterval(countDown, 1000);