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
  const nameCount = {};
  const result = [];
  for (const name of names) {
    if (nameCount[name] === undefined) {
      nameCount[name] = 0;
      result.push(name);
    }
    else {
      nameCount[name]++;
      let newName = `${name}(${nameCount[name]})`;
      while (nameCount[newName] !== undefined) {
        nameCount[name]++;
        newName = `${name}(${nameCount[name]})`;
      }
      nameCount[newName] = 0;
      result.push(newName);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
