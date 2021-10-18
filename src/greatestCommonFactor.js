import readlineSync from 'readline-sync';
import { randomInt } from './randomInt.js';
import { name, greetings } from './cli.js';
import { gcd } from './gcd.js';

// eslint-disable-next-line import/prefer-default-export
export const playGameBrainGCD = () => {
    let i = 0;
    greetings();

    console.log('What number is missing in the progression?');

    while (i < 3) {
        const firstRandomNumb = randomInt(1, 30);
        const secondRandomNumb = randomInt(1, 30);
        const expression = `Question: ${`${firstRandomNumb} ${secondRandomNumb}`}`;
        console.log(expression);
        const answer = readlineSync.question('Your answer: ');
        i += 1;
        // eslint-disable-next-line no-eval
        const expressionResult = gcd(firstRandomNumb, secondRandomNumb);
        if (expressionResult !== Number(answer)) {
            return console.log(`${answer} is wrong answer ;(. Correct answer was ${expressionResult}.\nLet's try again, ${name()}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${name()}!`);
};
