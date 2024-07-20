'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state data part of the state application
let highscore = 0;

const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when thre is no input
  if (!guess) {
    displayMassage('⛔️ No number');
    //when player win
  } else if (guess === secretNumber) {
    displayMassage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore) {
    highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when gues is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? '📈 Too hight!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMassage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;

  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when thre is no input
    if (!guess) {
      displayMassage('⛔️ No number');
      //when player win
    } else if (guess === secretNumber) {
      displayMassage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      //when gues is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMassage(guess > secretNumber ? '📈 Too hight!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMassage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });
});
//<button class="btn again">Again!</button>
