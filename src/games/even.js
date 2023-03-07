import getRandomNumber from '../getRandomNumber.js';
import letsPlay from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const generatedData = () => {
  const question = getRandomNumber();
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGame = () => {
  letsPlay(generatedData, condition);
};
export default startGame;
