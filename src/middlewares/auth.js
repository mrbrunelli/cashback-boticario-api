require("dotenv/config");
const jwt = require("jsonwebtoken");
const { unauthorized } = require("../helpers/http");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return unauthorized(res, "Token Not Provided.");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return unauthorized(res, "Invalid Token.");
    }
    return next();
  });
};

module.exports = {
  verifyJWT,
};
