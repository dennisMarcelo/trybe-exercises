const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

assert.strictEqual(myFizzBuzz(9), 'fizz');

assert.strictEqual(myFizzBuzz(25), 'buzz');

let number = 17;
assert.strictEqual(myFizzBuzz(number), number);

assert.strictEqual(myFizzBuzz('fragoEmpanado'), false);
