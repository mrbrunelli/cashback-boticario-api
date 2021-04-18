const knex = require("../database/connection");
const { ok, badRequest } = require("../helpers/http");
const { isValidDealer } = require("../services/dealer");

const dealerController = () => {
  return {
    index: async (req, res) => {
      const dealers = await knex("dealer")
        .select("id", "name", "cpf", "email")
        .orderBy("name");
      return ok(res, dealers);
    },

    save: async (req, res) => {
      const trx = await knex.transaction();
      try {
        if (!isValidDealer(req.body)) {
          throw Error("Invalid Dealer fields provided.");
        }
        const { name, email, cpf, password } = req.body;
        const dealer = await trx("dealer")
          .insert({ name, email, cpf, password })
          .returning();
        await trx("cashback")
          .insert({ dealer_id: dealer[0] });
        await trx.commit();
        return ok(res, "Dealer Registered Successfully.");
      } catch (e) {
        await trx.rollback();
        return badRequest(res, e.message);
      }
    },
  };
};

module.exports = {
  dealerController,
};
