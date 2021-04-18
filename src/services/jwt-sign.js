require("dotenv/config");
const jwt = require("jsonwebtoken");

/**
 * @param {number} id - User ID
 * @param {string} email - User E-mail
 */
const generateJwtPayload = (id, email) => {
  const minute = 60;
  const token = jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: minute * 30,
    },
  );
  return token;
};

module.exports = {
  generateJwtPayload,
};
