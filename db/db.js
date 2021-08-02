const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("../knexfile");

const env = process.env.NODE_ENV;

function setupDB() {
  // Initialize knex.
  //console.log(env);
  const knex = Knex(knexfile[env]);

  await knex.migrate.rollback(knexfile[env]);
  await knex.migrate.latest(knexfile[env]);
  await knex.seed.run(knexfile[env]);
  // Give the knex instance to objection.
  Model.knex(knex);
}

module.exports = setupDB;
