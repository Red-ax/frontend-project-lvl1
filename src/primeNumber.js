import readlineSync from 'readline-sync';
import { randomInt } from './randomInt.js';
import { name, greetings } from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export const playGameBrainPrime = () => {
    let i = 0;
    greetings();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    while (i < 3) {
        const randomNum = randomInt(2, 300);

        const expression = `Question: ${randomNum}`;
        console.log(expression);
        const answer = readlineSync.question('Your answer: ');
        i += 1;

        let primeNum = false;
        for (let a = (answer / 2); a > 0; a -= 1) {
            if (answer % a !== 0) {
                primeNum = false;
            }
            primeNum = true;
        }

        if ((primeNum === false && answer !== 'no') || (primeNum === true && answer !== 'yes')) {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name()}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${name()}!`);
};
