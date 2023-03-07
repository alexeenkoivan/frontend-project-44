import getRandomNumber from '../getRandomNumber.js';
import letsPlay from '../index.js';

const getGCD = (number1, number2) => {
  let result = 0;
  const minimalNumber = Math.min(number1, number2);
  for (let i = 0; i <= minimalNumber; i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      result = i;
    }
  }
  return result;
};
const generatedData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};
const condition = 'Find the greatest common divisor of given numbers.';
const startGame = () => {
  letsPlay(generatedData, condition);
};
export default startGame;
