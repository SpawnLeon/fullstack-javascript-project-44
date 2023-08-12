import * as rl from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = rl.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default greeting;
