const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const disregardedColumns = Array(matrix[0].length).fill(false);
  let result = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (!disregardedColumns.includes(column)) {
        result += matrix[row][column];
        if (matrix[row][column] === 0) {
          disregardedColumns.push(column);
        }
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
