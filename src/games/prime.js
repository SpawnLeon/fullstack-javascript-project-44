import { getRandom, isPrime } from '../lib/index.js';

export default () => {
  const getDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const start = () => {
    const num = getRandom(1, 100);
    const question = num;

    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    return ({ question, correctAnswer });
  };
  return ({ getDescription, start });
};
