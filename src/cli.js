import readlineSync from 'readline-sync';

let namePlayer;

export const greetings = () => {
    console.log('Welcome to the Brain Games!');
    namePlayer = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${namePlayer}!`);
};

export const name = () => namePlayer;
