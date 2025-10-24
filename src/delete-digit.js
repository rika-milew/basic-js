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
  const string = n.toString();
  let maxNumber = 0;
  for (let i = 0; i < string.length; i += 1) {
    const number = +(`${string.slice(0, i)}${string.slice(i + 1)}`);
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
