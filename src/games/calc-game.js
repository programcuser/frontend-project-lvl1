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

  let isRightAnswer = true;
  let i = 1;
  while (i <= rounds && isRightAnswer) {
    const num1 = game.getRandomInt(0, 100);
    const num2 = game.getRandomInt(0, 100);
    const operationNum = game.getRandomInt(0, 3);
    const operations = ['+', '-', '*'];
    const expression = `${num1} ${operations[operationNum]} ${num2}`;

    console.log(`Question: ${expression}`);
    const userAnswer = game.getAnswer();
    const resultAnswer = calculateExpression(num1, num2, operations[operationNum]);

    isRightAnswer = game.comapreAnswers(userAnswer, resultAnswer);
    if (!isRightAnswer) {
      break;
    }

    i += 1;
  }

  game.printGameResult(i, rounds, name);
};

export default startCalcGame;
