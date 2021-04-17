exports.up = function (knex) {
  const IN_VALIDATION = 1;
  return knex.schema.createTable("order", (table) => {
    table.increments("id").primary();
    table.integer("cod").unique();
    table.float("gloss_amount").notNullable();
    table.float("net_amount").notNullable();
    table.integer("dealer_id")
      .notNullable()
      .references("id")
      .inTable("dealer");
    table.integer("order_id")
      .notNullable()
      .defaultTo(IN_VALIDATION)
      .references("id")
      .inTable("order_status");
    table.dateTime("date").notNullable().defaultTo(knex.fn.now());
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("order");
};
