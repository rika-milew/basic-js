const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? '+';
  const addition = options.hasOwnProperty('addition') && options.addition !== undefined
      ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? '|';
  let addString = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    addString += addition;
    if (i < additionRepeatTimes - 1) addString += additionSeparator;
  }
  let string = '';
  for (let i = 0; i < repeatTimes; i++) {
    string += str + addString;
    if (i < repeatTimes - 1) string += separator;
  }
  return string;
}

module.exports = {
  repeater
};
