const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let nextDigit = true;
  for (let i = 0; i < arr.length; i++) {
    const digit = arr[i];
    if (digit === '--discard-next') {
      nextDigit = false;
    } else if (digit === '--discard-prev') {
      if (nextDigit && result.length && arr[i - 2] !== '--discard-next') result.pop();
    } else if (digit === '--double-next') {
       if (i + 1 < arr.length && nextDigit) result.push(arr[i + 1]);
    } else if (digit === '--double-prev') {
      if (nextDigit && result.length && arr[i - 2] !== '--discard-next') result.push(result[result.length - 1]);
    } else {
      if (nextDigit) {
        result.push(digit);
      }
    nextDigit = true;
    }
  }
  return result;
}

module.exports = {
  transform
};
