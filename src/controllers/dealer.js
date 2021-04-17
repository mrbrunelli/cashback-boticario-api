const knex = require("../database/connection");
const { ok, badRequest } = require("../helpers/http");

const dealerController = () => {
  return {
    index: async (req, res) => {
      const dealers = await knex("dealer")
        .select("name", "cpf", "email")
        .orderBy("name");
      return ok(res, dealers);
    },

    save: async (req, res) => {
      try {
        const { name, email, cpf, password } = req.body;
        await knex("dealer").insert({ name, email, cpf, password });
        return ok(res, "Dealer Registered Successfully.");
      } catch (e) {
        return badRequest(res, e.message);
      }
    },
  };
};

module.exports = {
  dealerController,
};
