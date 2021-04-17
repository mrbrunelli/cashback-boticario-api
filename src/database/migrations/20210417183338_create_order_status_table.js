exports.up = function (knex) {
  return knex.schema.createTable("order_status", (table) => {
    table.integer("id").primary();
    table.string("description").unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("order_status");
};
