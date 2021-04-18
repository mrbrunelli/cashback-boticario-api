const { isValidData } = require("./is-valid-data");

/**
 * Example: 3% of 25 = 24.25 = R$ 0.75 of CashBack
 * @param {number} amount - Amount value to calculate - Ex: 25
 * @param {number} percent - Percentage of CashBack - Ex: 3
 */
const calculateCashBack = (amount, percent) => {
  const percentFormated = 1 - (percent / 100);
  return amount * percentFormated;
};

/**
 * @param {object} receivedData
 */
const isValidOrder = (receivedData) => {
  const validOrder = [
    "cod",
    "gloss_amount",
    "net_amount",
    "date",
    "dealer_id",
  ];
  return isValidData(validOrder, receivedData);
};

module.exports = {
  calculateCashBack,
  isValidOrder,
};
