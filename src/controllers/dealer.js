const knex = require("../database/connection");
const { ok, badRequest } = require("../helpers/http");
const { isValidDealer } = require("../services/dealer");
const { encryptText } = require("../services/hash");

const dealerController = () => {
  return {
    index: async (req, res) => {
      const dealers = await knex("dealer")
        .select("id", "name", "cpf", "email")
        .orderBy("name");
      return ok(res, dealers);
    },

    show: async (req, res) => {
      try {
        const { id } = req.params;
        if (!id) {
          throw Error("Erro. ID não informado.");
        }
        const dealer = await knex("dealer as d")
          .where("d.id", id)
          .join("cashback as c", "c.dealer_id", "d.id")
          .select(
            "d.id",
            "d.name",
            "d.email",
            "d.cpf",
            "c.amount as cashback_amount",
          )
          .first();
        if (!dealer) {
          return badRequest(res, "Revendedor não encontrado.");
        }
        return ok(res, dealer);
      } catch (e) {
        return badRequest(res, "Erro ao listar Revendedor.");
      }
    },

    save: async (req, res) => {
      const trx = await knex.transaction();
      try {
        if (!isValidDealer(req.body)) {
          throw Error("Erro. Formato de dados inválidos.");
        }
        const { name, email, cpf, password } = req.body;
        const encryptedPassword = encryptText(password);
        const dealerId = await trx("dealer")
          .insert({ name, email, cpf, password: encryptedPassword })
          .returning();
        await trx("cashback")
          .insert({ dealer_id: dealerId[0] });
        await trx.commit();
        return ok(res, "Revendedor Cadastrado com Sucesso!");
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
