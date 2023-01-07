'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
// const score1El = document.getElementById('score--1'); // supposedly faster
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // setting previous players score to 0
        // Switch to next player
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active') // removes class if present, otherwise adds class
        player1El.classList.toggle('player--active')
}

// Rolling dice functionality
 btnRoll.addEventListener('click', function() {
    if (playing) {
    // generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // generates a new dice object each call
    
    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    if (dice !== 1) {
    // add dice to current score
    currentScore = currentScore + dice; 
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
    switchPlayer();
    }
    }})
    btnHold.addEventListener('click', function() {
      if (playing) {
      // 1. Add current score to active player's score
      scores[activePlayer] += currentScore;
      // scores[1] = scores[1] + currentScore;
      // scores[0] = scores[0] + currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

     // 2. check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
    // Finish the game
    diceEl.classList.add('hidden');
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {
    // 3. change player to next player
    switchPlayer();
  }}})

  btnNew.addEventListener('click', function() {
  location.reload();
  });