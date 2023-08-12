import { getRandom } from '../lib/index.js';

export default () => {
  const getDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';
  const start = () => {
    const question = getRandom();
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return ({ question, correctAnswer });
  };
  return ({ getDescription, start });
};
