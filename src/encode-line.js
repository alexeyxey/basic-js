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

  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === str[i + 1]) {
      count++
    }
    else {
      if (count > 1) {
        result += count + char;

      }
      else if (count === 1) {
        result += char;
      }
      count = 1
    }

  }
  return result
}

module.exports = {
  encodeLine
};
