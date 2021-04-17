/**
 * isEmpty - Checks if there are values ​​in the object.
 * @param {object} obj
 */
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

module.exports = {
  isEmpty,
};
