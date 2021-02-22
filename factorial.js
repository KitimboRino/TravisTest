/*
Kitimbo Rino & Liz Kamugisha.
-------------------------------------------FACTORIAL--------------------------------------------
Factorial of a number calculted by multiplying all whole numbers from our given number down to 1.
Factorials are indicated by a "!" sign and they are whole numbers.

Whole Numbers are positive integers and 0. For example; 0, 1, 2, 3, and so on.
*/

// Function to test factorial of a number (recussion method).

/* Final Verion (Last Unit) */
const factorial = (num) => {
  if (num === 0) {
    return 1;
  }

  if (num < 0) {
    throw new Error(`${num} must be greater than or equal to 0`);
  }

  if (num !== Math.trunc(num)) {
    throw new Error(`${num} is a decimal number`);
  }

  return num * factorial(num - 1);
};
console.log(factorial(3));

//  Exporting factorial function.
module.exports = factorial;
