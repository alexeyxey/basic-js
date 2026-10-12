const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {

  }

  for (let i = 0; i < domains.length; i++) {
    const elementI = domains[i];
    let partOfArray = elementI.split('.');
    let key = '';

    for (let j = partOfArray.length - 1; j >= 0; j--) {
      const elementJ = partOfArray[j];
      key += `.` + elementJ

      if (Object.hasOwn(result, key)) {
        result[key]++
      } else {
        result[key] = 1
      }

    }

  }
  return result
}
module.exports = {
  getDNSStats
};
