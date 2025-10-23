const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const keys = {};
  const result = [];
  names.forEach((name) => {
    if (!keys[name]) {
      keys[name] = 1;
      result.push(name);
    } else {
      let renamed = `${name}(${keys[name]})`;
      if (keys[renamed]) {
        keys[name]++;
        renamed = `${name}(${keys[name]})`;
      }
      keys[renamed] = 1;
      keys[name]++;
      result.push(renamed);
    }
  });
  return result;
}

module.exports = {
  renameFiles
};
