import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import * as game from '../index.js';

const calculateExpression = (operand1, operand2, operation) => {
  if (operation === '+') {
    return operand1 + operand2;
  }
  if (operation === '-') {
    return operand1 - operand2;
  }
  if (operation === '*') {
    return operand1 * operand2;
  }

  return null;
};

const startCalcGame = (rounds) => {
  const name = greeting();
  game.printRule('What is the result of the expression?');

  let i = 1;
  while (i <= rounds) {
    const num1 = game.getRandomInt(0, 100);
    const num2 = game.getRandomInt(0, 100);
    const operationNum = game.getRandomInt(0, 3);
    const operations = ['+', '-', '*'];
    const expression = `${num1} ${operations[operationNum]} ${num2}`;

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const resultAnswer = calculateExpression(num1, num2, operations[operationNum]);

    if (Number(userAnswer) !== resultAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${resultAnswer}.`);
      break;
    } else {
      console.log('Correct!');
    }

    i += 1;
  }

  if (i === rounds + 1) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

export default startCalcGame;
