/**
 * Example: 3% of 25 = 24.25
 * @param {number} amount - Amount value to calculate - Ex: 25
 * @param {number} percent - Percentage of CashBack - Ex: 3
 */
const calculateCashBack = (amount, percent) => {
  const percentFormated = 1 - (percent / 100);
  return amount * percentFormated;
};

/**
 * @param {object} order
 * @param {number} order.cod
 * @param {number} order.gloss_amount
 * @param {number} order.net_amount
 * @param {string} order.date
 * @param {number} order.dealer_id
 */
const isValidOrder = (order) => {
  const validOrder = [
    "cod",
    "gloss_amount",
    "net_amount",
    "date",
    "dealer_id",
  ];
  return validOrder.every((key) => Object.keys(order).includes(key));
};

module.exports = {
  calculateCashBack,
  isValidOrder,
};
