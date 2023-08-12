import { getRandom, calculator } from '../lib/index.js';

export default () => {
  const getDescription = () => 'What is the result of the expression?';
  const start = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[getRandom(0, operations.length - 1)];
    const num1 = getRandom(1, 10);
    const num2 = getRandom(1, 10);

    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(calculator(operation, num1, num2));
    return ({ question, correctAnswer });
  };
  return ({ getDescription, start });
};
