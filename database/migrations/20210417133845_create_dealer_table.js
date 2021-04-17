exports.up = function (knex) {
  return knex.schema.createTable("dealer", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("cpf").unique();
    table.string("email").unique();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("dealer");
};
