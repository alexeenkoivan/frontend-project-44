import getRandomNumber from '../getRandomNumber.js';
import letsPlay from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generatedData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startGame = () => {
  letsPlay(generatedData, condition);
};
export default startGame;
