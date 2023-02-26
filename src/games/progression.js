import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const progressionLength = 10;
const progression = () => {
  const result = [];
  const stepOfProgression = getRandomNumber(2, 5);
  const beginNumber = getRandomNumber();
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(beginNumber + stepOfProgression * i);
  }
  return result;
};
const generatedData = () => {
  const result = progression();
  const hiddenIndex = getRandomNumber(0, progressionLength);
  const correctAnswer = String(result[hiddenIndex]);
  result[hiddenIndex] = '..';
  const question = result.join(' ');
  return [question, correctAnswer];
};
const condition = 'What number is missing in the progression?';
const startGame = () => {
  gameLogic(generatedData, condition);
};
export default startGame;
