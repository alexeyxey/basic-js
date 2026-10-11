const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */



function getCommonCharacterCount(s1, s2) {
  let s1ToLower = s1.toLowerCase();
  let s2ToLower = s2.toLowerCase();

  let s1ToArray = s1ToLower.split('');


  let sT2oArray = s2ToLower.split('');


  let result = s1ToArray.filter((item, index) => {
    let foundIndex = sT2oArray.indexOf((item))


    if (foundIndex === -1) {
      return
    }
    else {
      sT2oArray.splice(foundIndex, 1);
      return true;
    }


  })
  return result.length
}


module.exports = {
  getCommonCharacterCount
};
