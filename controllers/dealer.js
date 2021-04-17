const knex = require("../database/connection");
const { ok } = require("../helpers/http");

const dealerController = () => {
  return {
    index: async (req, res) => {
      const dealers = await knex("dealer")
        .select("name", "cpf", "email")
        .orderBy("name");
      return ok(res, dealers);
    },
  };
};

module.exports = {
  dealerController,
};
