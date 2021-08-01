const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("../knexfile");

function setupDB() {
  // Initialize knex.
  const knex = Knex(knexfile.development);

  // Give the knex instance to objection.
  Model.knex(knex);
}

module.exports = setupDB;
