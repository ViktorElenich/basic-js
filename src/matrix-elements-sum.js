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
  let sum = 0;
  const cols = matrix[0].length;
  const rows = matrix.length;
  const hauntedCols = new Set();
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] === 0) {
        hauntedCols.add(j);
        break;
      } else {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
