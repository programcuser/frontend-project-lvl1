import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin) + roundMin);
  // The maximum is exclusive and the minimum is inclusive
};

export const printRule = (rule) => {
  console.log(rule);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const comapreAnswers = (userAnswer, expectedAnswer) => {
  const result = (Number(userAnswer) === expectedAnswer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }

  return result;
};

export const gcd = (num1, num2) => {
  let tmpNum1 = num1;
  let tmpNum2 = num2;
  let temp;

  while (tmpNum2 !== 0) {
    temp = tmpNum1 % tmpNum2;
    tmpNum1 = tmpNum2;
    tmpNum2 = temp;
  }
  return tmpNum1;
};

export const printGameResult = (currentRound, expectedRound, playerName) => {
  if (currentRound === expectedRound + 1) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}`);
  }
};
