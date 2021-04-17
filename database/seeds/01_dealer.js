exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("dealer").del()
    .then(function () {
      // Inserts seed entries
      return knex("dealer").insert([
        {
          name: "Bot",
          cpf: "26526442030",
          email: "bot@gmail.com",
          password: "xptz@123",
        },
      ]);
    });
};
