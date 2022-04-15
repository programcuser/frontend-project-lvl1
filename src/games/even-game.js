import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import * as game from '../index.js';

const isEven = (number) => number % 2 === 0;

const startEvenGame = (rounds) => {
  const name = greeting();
  game.printRule('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while (i <= rounds) {
    const num = game.getRandomInt(0, 100);
    const answer = readlineSync.question(`Question: ${num} `);
    const resultAnswer = isEven(num) ? 'yes' : 'no';

    if (answer !== resultAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${resultAnswer}.`);
      break;
    } else {
      console.log('Correct!');
    }

    i += 1;
  }

  game.printGameResult(i, rounds, name);
};

export default startEvenGame;
