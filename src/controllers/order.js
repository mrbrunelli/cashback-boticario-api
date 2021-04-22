const knex = require("../database/connection");
const { ok, badRequest } = require("../helpers/http");
const { calculateCashBack, isValidOrder } = require("../services/order");

const orderController = () => {
  return {
    showByDealerId: async (req, res) => {
      try {
        const { dealer_id } = req.params;
        if (!dealer_id) {
          throw Error("ID do Revendedor não recebido.");
        }
        const orders = await knex("order as o")
          .where("o.dealer_id", dealer_id)
          .join("order_status as os", "os.id", "o.order_status_id")
          .select(
            "o.id",
            "o.cod",
            "o.gloss_amount",
            "o.net_amount",
            "o.date",
            "os.id as order_status_id",
            "os.description as order_status_description",
          );
        if (!orders) {
          throw Error("Pedidos não encontrados.");
        }
        return ok(res, orders);
      } catch (e) {
        return badRequest(res, e.message);
      }
    },

    save: async (req, res) => {
      const trx = await knex.transaction();
      try {
        if (!isValidOrder(req.body)) {
          throw Error("Erro. Formato de dados inválidos.");
        }
        const { cod, gloss_amount, net_amount, date, dealer_id } = req.body;
        const cashBack = calculateCashBack(net_amount, 3);
        await trx("order")
          .insert({
            cod,
            gloss_amount,
            net_amount,
            date,
            dealer_id,
          });
        const previusCashBackAmount = await trx("cashback")
          .where("dealer_id", dealer_id)
          .select("amount")
          .first();
        const currentCashBackAmount = previusCashBackAmount.amount + cashBack;
        await trx("cashback")
          .where("dealer_id", dealer_id)
          .update({
            amount: currentCashBackAmount,
            dealer_id,
          });
        await trx.commit();
        return ok(res, "Pedido Cadastrado com Sucesso!");
      } catch (e) {
        await trx.rollback();
        return badRequest(res, e.message);
      }
    },
  };
};

module.exports = {
  orderController,
};
