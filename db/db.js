const { Model } = require("objection");
const Knex = require("knex");
const knexfile = require("../knexfile");

const env = process.env.NODE_ENV;

function setupDB() {
  // Initialize knex.
  //console.log(env);
  const knex = Knex(knexfile[env]);

  const promise = new Promise(async (resolve, reject) => {
    try {
      await knex.migrate.rollback(knexfile[env]);
      await knex.migrate.latest(knexfile[env]);
      await knex.seed.run(knexfile[env]);
      Model.knex(knex);
      resolve();
    } catch (err) {
      // console.log(err);
      reject();
    }
  });

  return promise;

  // Give the knex instance to objection.
}

module.exports = setupDB;
