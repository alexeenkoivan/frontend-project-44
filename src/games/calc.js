import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const actionsOfCalc = ['+', '-', '*'];
const calc = (number1, number2, action) => {
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
  const correctAnswer = calc(firstNumber, secondNumber, actionOfCalc).toString();
  return [question, correctAnswer];
};

const condition = 'What is the result of the expression?';
const startGame = () => {
  gameLogic(generatedData, condition);
};
export default startGame;
