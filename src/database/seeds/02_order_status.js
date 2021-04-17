exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("order_status").del()
    .then(function () {
      // Inserts seed entries
      return knex("order_status").insert([
        { id: 1, description: "IN VALIDATION" },
        { id: 2, description: "DISAPPROVED" },
        { id: 3, description: "APPROVED" },
      ]);
    });
};
