import { getRandom, generateArithmeticProgression } from '../lib/index.js';

export default () => {
  const getDescription = () => 'What number is missing in the progression?';
  const start = () => {
    const length = getRandom(5, 10);
    const progression = generateArithmeticProgression(length);
    const hiddenIndex = getRandom(0, length - 1);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = `${progression.join(' ')}`;

    return ({ question, correctAnswer });
  };
  return ({ getDescription, start });
};
