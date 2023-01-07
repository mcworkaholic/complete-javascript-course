'use strict';

// console.log(document.querySelector('.message').textContent); // reads text content

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.score').textContent = 10;

// document.querySelector('.number').textContent = 13;


// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value)

document.querySelector('#button-again').addEventListener('click', function (){
score = 20;
randNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});

  

let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // mutable counter
let highScore = 0;



document.querySelector('.check').addEventListener('click', function() {
    
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

 // when there is no input
    if (!guess) {
document.querySelector('.message').textContent = ' 🚫 No Number!';
  // when the guess is correct  
} else if (guess === randNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randNumber;
    if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is incorrect
} else if ( guess !== randNumber){
    if (score > 1) {
    document.querySelector('.message').textContent = guess > randNumber ? '📈 Too High!' : '📉 Too Low';
    score--;
    document.querySelector('.score').textContent = score;
}   else {
    document.querySelector('.message').textContent = 'You lost the game.';
    document.querySelector('.score').textContent = 0;
}
}
});