exports.seed = function (knex) {
  const boticarioArroba123 =
    "$2b$10$4Prl0Pwq3ynzRRfsywWQhekHdELuLeHkMsXuQwpvGQSLHB2S0xa3u";
  // Deletes ALL existing entries
  return knex("dealer").del()
    .then(function () {
      // Inserts seed entries
      return knex("dealer").insert([
        {
          name: "Maria Aparecida",
          cpf: "26526442030",
          email: "maria.aparecida@gmail.com",
          password: boticarioArroba123,
        },
        {
          name: "Flávia Soares",
          cpf: "93737665036",
          email: "flavia.soares@gmail.com",
          password: boticarioArroba123,
        },
      ]);
    });
};
