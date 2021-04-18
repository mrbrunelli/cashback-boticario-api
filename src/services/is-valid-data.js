/**
 * @param {Array} validData - A Valid Format of Data - Ex: ["foo", "bar", "joe"]
 * @param {object} receivedData - A Object to compare with validData - Ex: ["foo", "joe"] returns false
 */
const isValidData = (validData, receivedData) => {
  return validData.every((key) => Object.keys(receivedData).includes(key));
};

module.exports = {
  isValidData,
};
