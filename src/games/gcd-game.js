import greeting from '../cli.js';
import * as game from '../index.js';

const startGcdGame = (rounds) => {
  const name = greeting();
  game.printRule('Find the greatest common divisor of given numbers.');

  let isRightAnswer = true;
  let i = 1;
  while (i <= rounds && isRightAnswer) {
    const num1 = game.getRandomInt(1, 101);
    const num2 = game.getRandomInt(1, 101);

    const expression = `${num1} ${num2}`;

    console.log(`Question: ${expression}`);
    const userAnswer = game.getAnswer();
    const resultAnswer = game.gcd(num1, num2);

    isRightAnswer = game.comapreAnswers(userAnswer, resultAnswer);
    if (!isRightAnswer) {
      break;
    }

    i += 1;
  }

  if (i === rounds + 1) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

export default startGcdGame;
