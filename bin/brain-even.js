#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const isEven = (number) => number % 2 === 0;

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 1;
while (i <= 3) {
  const num = Math.floor(Math.random() * 99);
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

if (i === 4) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}`);
}
