/* --------------------- Test last ---------------------- */
// Importing Chai library
const chai = require('chai');

const { assert } = chai;

// Importing factorial function.
const factorial = require('../factorial');

describe('factorial', () => {
  //  Last check for Factorial function.
  it('Check factorial(0) returns 1 ', () => {
    const result = factorial(0);
    assert.equal(result, 1);
  });

  it('Check factorial(1) returns 1 ', () => {
    const result = factorial(1);
    assert.equal(result, 1);
  });

  it('Check factorial(3) returns 6 ', () => {
    const result = factorial(3);
    assert.equal(result, 6);
  });

  it('Check factorial(5) returns 120 ', () => {
    const result = factorial(5);
    assert.equal(result, 120);
  });
});
