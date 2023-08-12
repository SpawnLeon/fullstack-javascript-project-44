export const getRandom = (start = 0, end = 100) => {
  const range = end - start + 1;
  return Math.floor(Math.random() * range) + start;
};

export const calculator = (operation, num1, num2) => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const opFn = operations[operation];
  if (!opFn) {
    throw new Error(`Invalid operation: ${operation}`);
  }

  return [num1, num2].map(parseFloat).reduce(opFn);
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const generateArithmeticProgression = (length = 10) => {
  const start = getRandom(1, 10);
  const step = getRandom(1, 5);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
