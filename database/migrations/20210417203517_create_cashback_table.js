exports.up = function (knex) {
  return knex.schema.createTable("cashback", (table) => {
    table.integer("id").primary();
    table.float("amount").notNullable().defaultTo(0);
    table.integer("dealer_id")
      .notNullable()
      .references("id")
      .inTable("dealer");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("cashback");
};
