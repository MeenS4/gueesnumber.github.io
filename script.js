'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message'). textContent = '🔥Correct Number!🔥';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let counter = 0;

let hsContent = document.querySelector('.label-highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚧No number!🚧';

    //no input
  } else {
    if (Number(document.querySelector('.guess').value) == secretNumber) {
      counter++;
      document.querySelector('.label-score').textContent = `📊 Score: ${counter}`;
      document.querySelector('.message').textContent = '🔥Correct Answer!🔥';
      document.querySelector('.header').textContent = 'Correct Answer Is:';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      //player wins
    } 
    else if (document.querySelector('.guess').value > secretNumber) {
      counter++;
      document.querySelector('.message').textContent = '📈Too high📈';
      document.querySelector('.label-score').textContent = `📊 Score: ${counter}`;

      // too high
    } 
    else if (document.querySelector('.guess').value < secretNumber) {
      counter++;
      document.querySelector('.message').textContent = '📉Too low📉';
      document.querySelector('.label-score').textContent = `📊 Score: ${counter}`;

      //too low
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //highscore define
  
  let currentScore = counter;
  let currentHighest = document.querySelector('.label-highscore').textContent;
 
  currentHighest = currentHighest.trim()
  
  currentHighest = currentHighest.slice(14);
  
  currentHighest = Number(currentHighest);

  if (currentScore > currentHighest) {
    hsContent =  `🥇 Last Score: ${currentScore}`;
    document.querySelector('.label-highscore').textContent = hsContent;
    // document.querySelector('.label-highscore').textContent = currentScore;
  }
  
  
  document.querySelector('.guess').value = null;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  counter = 0;
  document.querySelector('.label-score').textContent = `📊 Score: ${counter}`;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.header').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
