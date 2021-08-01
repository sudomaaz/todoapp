const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("../knexfile");

const env = process.env.NODE_ENV;

function setupDB() {
  // Initialize knex.
  //console.log(env);
  const knex = Knex(knexfile[env]);

  // Give the knex instance to objection.
  Model.knex(knex);
}

module.exports = setupDB;
