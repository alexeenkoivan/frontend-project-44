import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 20) => (Math.floor(Math.random() * (max - min + 1)) + min);
const isEven = (number) => (number % 2 === 0);
const generatedData = () => {
  const number = getRandomNumber();
  const question = number;
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const playDecor = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generatedData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
const startGame = () => {
  playDecor(generatedData, condition);
};
export default startGame;
