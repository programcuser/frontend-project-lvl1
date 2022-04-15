import greeting from '../cli.js';
import * as game from '../index.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  let i = Math.ceil(number / 2);
  while (i > 1) {
    if (number % i === 0) {
      return false;
    }
    i -= 1;
  }

  return true;
};

const startPrimeGame = (rounds) => {
  const name = greeting();
  game.printRule('Answer "yes" if given number is prime. Otherwise answer "no".');

  let isRightAnswer = true;
  let i = 1;
  while (i <= rounds && isRightAnswer) {
    const num = game.getRandomInt(1, 100);

    console.log(`Question: ${num}`);
    const userAnswer = game.getAnswer();
    const resultAnswer = isPrime(num) ? 'yes' : 'no';

    isRightAnswer = (userAnswer === resultAnswer);
    if (!isRightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultAnswer}'.`);
      break;
    }
    console.log('Correct!');

    i += 1;
  }

  game.printGameResult(i, rounds, name);
};

export default startPrimeGame;
