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
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
  }

  return result;
};
