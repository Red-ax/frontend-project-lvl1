import readlineSync from 'readline-sync';
import { randomInt } from './randomInt.js';
import { name, greetings } from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export const playGameBrainEven = () => {
    let i = 0;
    greetings();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (i < 3) {
        const randomNumb = randomInt(1, 100);
        const expression = `Question: ${randomNumb}`;
        console.log(expression);
        const answer = readlineSync.question('Your answer: ');
        i += 1;

        if ((randomNumb % 2 === 0 && answer !== 'yes') || (randomNumb % 2 === 1 && answer !== 'no')) {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name()}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${name()}!`);
};
