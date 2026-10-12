const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numToString = String(n);
  let largestNumber = 0;
  for (let i = 0; i < numToString.length; i++) {
    const newNumber = Number(
      numToString.slice(0, i) + numToString.slice(i + 1)
    )
    if (newNumber > largestNumber) {
      largestNumber = newNumber;
    }
  }
  return largestNumber
}

module.exports = {
  deleteDigit
};
