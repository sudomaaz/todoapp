exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todo").insert([
        { name: "hapi.js", description: "read hapi documentation" },
      ]);
    });
};
