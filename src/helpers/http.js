/**
 * @param {Response} res - Http Response
 * @param {any} data
 */
const ok = (res, data) => {
  return res.json(data);
};

/**
 * @param {Response} res - Http Response
 * @param {string} message
 */
const badRequest = (res, message) => {
  return res.status(400).json(message);
};

/**
 * @param {Response} res - Http Response
 */
const notFound = (res) => {
  return res.status(400).json({
    error: "Ooops! Endpoint Not Found.",
    message: "Check the API Documentation.",
    docs: "https://github.com/mrbrunelli/cash-back-boticario-api/API_DOCS.md",
  });
};

/**
 * @param {Response} res
 * @param {string} message
 */
const unauthorized = (res, message) => {
  return res.status(401).json(message);
};

module.exports = {
  ok,
  badRequest,
  notFound,
  unauthorized,
};
