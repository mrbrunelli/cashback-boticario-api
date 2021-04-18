const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * @param {string} text
 */
const encryptText = (text) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(text, salt);
};

/**
 * Check if both are equal.
 * @param {string} text
 * @param {string} encryptedText
 */
const isEqual = (text, encryptedText) => {
  return bcrypt.compareSync(text, encryptedText);
};

module.exports = {
  encryptText,
  isEqual,
};
