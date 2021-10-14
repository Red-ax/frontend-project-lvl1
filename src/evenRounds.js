import readlineSync from 'readline-sync';
import { name, greetings } from './cli.js';

// Random number function
const randomInt = (min, max) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

export const playGame = () => {
    let correctAnswer = 0;
    greetings();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (correctAnswer < 3) {
        const randomNumb = randomInt(1, 100);
        console.log(`Question: ${randomNumb}`);
        const answer = readlineSync.question('Your answer: ');
        correctAnswer += 1;

        if ((randomNumb % 2 === 0 && answer !== 'yes') || (randomNumb % 2 === 1 && answer !== 'no')) {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${name}!`);
};

// export default playGame();
