const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = arr.filter(number => number !== -1).sort((a, b) => a - b);
  let current = 0;
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArray.push(-1);
    } else {
      newArray.push(sorted[current]);
      current++;
    }
  }
  return newArray;
}

module.exports = {
  sortByHeight
};
