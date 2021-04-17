const knex = require("../database/connection");
const { generateJwtPayload } = require("../services/jwt-sign");
const { isEmpty } = require("../services/is-empty");

const loginController = () => {
  return {
    handle: async (req, res) => {
      try {
        const { email, password } = req.body;
        const dealer = await knex("dealer")
          .where("email", email)
          .select("id", "name", "email", "password")
          .first();
        if (!dealer) {
          throw Error("E-mail or Password incorrectly.");
        }
        if (email != dealer.email || password != dealer.password) {
          throw Error("E-mail or Password incorrectly.");
        }
        const token = generateJwtPayload(dealer.id, dealer.email);
        return res.json({
          name: dealer.name,
          email: dealer.email,
          token: token,
        });
      } catch (e) {
        return res.status(400).json(e.message);
      }
    },
  };
};

module.exports = {
  loginController,
};
