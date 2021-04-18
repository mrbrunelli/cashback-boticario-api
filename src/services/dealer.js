const { isValidData } = require("./is-valid-data");

/**
 * @param {object} receivedData
 */
const isValidDealer = (receivedData) => {
  const validDealer = ["name", "email", "cpf", "password"];
  return isValidData(validDealer, receivedData);
};

module.exports = {
  isValidDealer
};
