import readlineSync from 'readline-sync';
import { randomInt } from './randomInt.js';
import { name, greetings } from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export const playGameBrainProgression = () => {
    let i = 0;
    greetings();

    console.log('What number is missing in the progression?');

    while (i < 3) {
        const startNum = randomInt(2, 20);
        const iteration = randomInt(2, 5);
        const progressionArr = [];

        // Create random array
        for (let a = startNum; a < 50; a += iteration) {
            progressionArr.push(a);
            if (progressionArr.length === 10) break;
        }

        // Get random element from array
        const randomElement = Math.floor(Math.random() * progressionArr.length);
        const randomElementValue = progressionArr[randomElement];
        progressionArr[randomElement] = '..';
        const progressionArrSpread = progressionArr.join(' ');
        const expression = `Question: ${progressionArrSpread}`;
        console.log(expression);
        const answer = readlineSync.question('Your answer: ');
        i += 1;

        if (randomElementValue !== Number(answer)) {
            return console.log(`${answer} is wrong answer ;(. Correct answer was ${randomElementValue}.\nLet's try again, ${name()}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${name()}!`);
};
