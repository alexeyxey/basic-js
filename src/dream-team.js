const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  let comandName = '';

  for (let i = 0; i < members.length; i++) {
    const el = members[i];
    if (typeof el === 'string') {
      let firstChars = el.trim().slice(0, 1);
      comandName += firstChars
    }
    else {
      continue
    }

  }
  return comandName.toUpperCase().split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
