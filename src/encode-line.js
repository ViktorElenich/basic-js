const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str.length === 0) return '';

  let encodedStr = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        encodedStr += count + str[i - 1];
      } else {
        encodedStr += str[i - 1];
      }
      count = 1;
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine
};
