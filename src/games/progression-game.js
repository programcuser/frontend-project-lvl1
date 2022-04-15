import greeting from '../cli.js';
import * as game from '../index.js';

const makeProgression = (firstElmnt = 1, progrLen = 1, progrStep = 1) => {
  const result = [firstElmnt];

  for (let i = 1; i < progrLen; i += 1) {
    result.push(result[i - 1] + progrStep);
  }

  return result;
};

const startProgressionGame = (rounds) => {
  const name = greeting();
  game.printRule('What number is missing in the progression?');

  let isRightAnswer = true;
  let i = 1;
  while (i <= rounds && isRightAnswer) {
    const progressionLength = game.getRandomInt(5, 11);
    const firstElement = game.getRandomInt(1, 51);
    const progressionStep = game.getRandomInt(1, 9);
    const randomIndex = game.getRandomInt(0, progressionLength);

    const progression = makeProgression(firstElement, progressionLength, progressionStep);
    const resultAnswer = progression[randomIndex];
    progression[randomIndex] = '..';

    const expression = progression.join(' ');
    console.log(`Question: ${expression}`);

    const userAnswer = game.getAnswer();

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

export default startProgressionGame;
