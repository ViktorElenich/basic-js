const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let maxDepth = 0;
    for (const item of arr) {
      const itemDepth = this.calculateDepth(item);
      if (itemDepth > maxDepth) {
        maxDepth = itemDepth;
      }
    }
    return maxDepth + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
