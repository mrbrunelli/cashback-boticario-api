require("dotenv/config");
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "Token not provided.",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        auth: false,
        message: "Invalid token.",
      });
    }
    return next();
  });
};

module.exports = {
  verifyJWT,
};
