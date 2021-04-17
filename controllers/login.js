const knex = require("../database/connection");

const loginController = () => {
  return {
    handle: async (req, res) => {
      try {
        const { email, password } = req.body;
        const dealer = await knex("dealer")
          .select("email", "password")
          .first();
        if (email != dealer.email || password != dealer.password) {
          throw Error("E-mail or Password incorrectly.");
        }
        return res.json("OK");
      } catch (e) {
        return res.status(400).json(e.message);
      }
    }
  };
};

module.exports = {
  loginController
}