'use strict';
// Variables
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Event Listener
document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  // If there isn't a number in input
  if (!input) {
    displayMessage('Insert a number!');
  }
  // If input is different from randomNumber
  else if (input !== randomNumber) {
    //If score is greater than 1
    if (score > 1) {
      document.querySelector('.message').textContent = `${
        input < randomNumber ? 'Too low!' : 'Too high!'
      }`;
      score--;
      document.querySelector('.score').textContent = score;
    }
    // If score is less than 1
    else {
      displayMessage('The attempts are over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // If input is equal to the randomNumber
  else if (input === randomNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
//Again Button / Refresh all the page

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessings...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
