import readlineSync from 'readline-sync';
import { randomInt } from './randomInt.js';
import { name, greetings } from './cli.js';

const mathOperator = ['+', '-', '*'];

// eslint-disable-next-line import/prefer-default-export
export const playGameBrainCalc = () => {
    let i = 0;
    greetings();

    console.log('What is the result of the expression?');

    while (i < 3) {
        const firstRandomNumb = randomInt(1, 30);
        const secondRandomNumb = randomInt(1, 30);
        const expression = `Question: ${`${firstRandomNumb} ${mathOperator[i]} ${secondRandomNumb}`}`;
        console.log(expression);
        const answer = readlineSync.question('Your answer: ');
        i += 1;
        // eslint-disable-next-line no-eval
        const expressionResult = eval(expression);
        if (expressionResult !== Number(answer)) {
            return console.log(`${answer} is wrong answer ;(. Correct answer was ${expressionResult}.\nLet's try again, ${name()}`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${name()}!`);
};
