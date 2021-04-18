exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cashback").del()
    .then(function () {
      // Inserts seed entries
      return knex("cashback").insert([
        { amount: 5.90, dealer_id: 1 },
        { amount: 0, dealer_id: 2 },
      ]);
    });
};
