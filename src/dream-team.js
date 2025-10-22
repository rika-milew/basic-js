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
  if (!Array.isArray(members)) return false;
  const letters = members
    .filter(member => typeof member === 'string')
    .map(name => name.trim()) 
    .filter(name => name.length > 0)
    .map(name => name[0].toUpperCase());
    const result = letters.sort().join('');
    return result;
}

module.exports = {
  createDreamTeam
};
