require("dotenv/config");
const jwt = require("jsonwebtoken");

/**
 * @param {number} id - User ID
 * @param {string} email - User E-mail
 */
const generateJwtPayload = (id, email) => {
  const token = jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 300,
    },
  );
  return token;
};

module.exports = {
  generateJwtPayload,
};
