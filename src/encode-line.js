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
  const letters = str.split('');
  const result = letters.map((letter, i) => {
    let counter = 1;
    while (letters[i + counter] === letter) {
      counter++;
    }
    if (i > 0 && letters[i - 1] === letter) return '';
    return (counter > 1 ? counter : '') + letter;
  });
  const newStr = result.join('');
  return newStr;
}

module.exports = {
  encodeLine
};
