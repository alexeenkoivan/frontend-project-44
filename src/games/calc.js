import getRandomNumber from '../getRandomNumber.js';
import letsPlay from '../index.js';

const actionsOfCalc = ['+', '-', '*'];
const getCalc = (number1, number2, action) => {
  switch (action) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown ${action}!`);
  }
};
const generatedData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const actionOfCalc = actionsOfCalc[getRandomNumber(0, actionsOfCalc.length - 1)];
  const question = `${firstNumber} ${actionOfCalc} ${secondNumber}`;
  const correctAnswer = getCalc(firstNumber, secondNumber, actionOfCalc).toString();
  return [question, correctAnswer];
};

const condition = 'What is the result of the expression?';
const startGame = () => {
  letsPlay(generatedData, condition);
};
export default startGame;
