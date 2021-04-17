const knex = require("../database/connection");

const dealerController = () => {
  return {
    index: async (req, res) => {
      const dealers = await knex("dealer")
        .select("name", "cpf", "email")
        .orderBy("name");
      return res.json(dealers);
    },
  };
};

module.exports = {
  dealerController,
};
