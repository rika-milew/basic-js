const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) return n;
  while (n >= 10) {
    let sum = 0;
    let digit = n;
    while (digit > 0) {
      sum += digit % 10;
      digit = Math.floor(digit / 10);
    }
    n = sum;
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
