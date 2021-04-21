const knex = require("../database/connection");
const { generateJwtPayload } = require("../services/jwt-sign");
const { ok, badRequest } = require("../helpers/http");
const { isEqual } = require("../services/hash");

const loginController = () => {
  return {
    handle: async (req, res) => {
      try {
        const { email, password } = req.body;
        const dealer = await knex("dealer as d")
          .where("d.email", email)
          .join("cashback as c", "c.dealer_id", "d.id")
          .select(
            "d.id",
            "d.name",
            "d.cpf",
            "d.email",
            "d.password",
            "c.amount as cashback_amount",
          )
          .first();
        if (!dealer) {
          throw Error("E-mail ou Senha incorretos.");
        }
        if (email != dealer.email || !isEqual(password, dealer.password)) {
          throw Error("E-mail ou Senha incorretos.");
        }
        const token = generateJwtPayload(dealer.id, dealer.email);
        return ok(res, {
          id: dealer.id,
          name: dealer.name,
          cpf: dealer.cpf,
          email: dealer.email,
          cashback_amount: dealer.cashback_amount,
          token: token,
        });
      } catch (e) {
        return badRequest(res, "Erro ao Realizar Login.");
      }
    },
  };
};

module.exports = {
  loginController,
};
