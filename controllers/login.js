const knex = require("../database/connection");
const { generateJwtPayload } = require("../services/jwt-sign");
const { ok, badRequest } = require("../helpers/http");

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
        return ok(res, {
          name: dealer.name,
          email: dealer.email,
          token: token,
        });
      } catch (e) {
        return badRequest(res, e.message);
      }
    },
  };
};

module.exports = {
  loginController,
};
