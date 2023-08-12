import { gcd, getRandom } from '../lib/index.js';

export default () => {
  const getDescription = () => 'Find the greatest common divisor of given numbers.';
  const start = () => {
    const num1 = getRandom(1, 50);
    const num2 = getRandom(1, 50);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));
    return ({ question, correctAnswer });
  };
  return ({ getDescription, start });
};
