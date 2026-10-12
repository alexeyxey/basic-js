const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  let groups = inputString.split('-');
  const allowed = '1234567890ABCDEF';

  if (groups.length !== 6) {
    return false
  }

  for (let i = 0; i < groups.length; i++) {

    if (groups[i].length !== 2) {
      return false
    }



    if (!allowed.includes(groups[i][0]) || !allowed.includes(groups[i][1])) {
      return false
    }

  }
  return true
}
console.log(isMAC48Address('00-1B-63-84-45-E6'))


module.exports = {
  isMAC48Address
};
