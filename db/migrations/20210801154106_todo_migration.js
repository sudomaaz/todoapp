exports.up = function (knex) {
  console.log(process.env.DB_NAME);
  return knex.schema.createTable("todo", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.boolean("done").defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todo");
};
