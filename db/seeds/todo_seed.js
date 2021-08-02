exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todo").insert([
        { name: "hapijs", description: "read hapi documentation" },
      ]);
    });
};
