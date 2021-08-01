const { Model } = require("objection");

class Todos extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "todo";
  }
}

module.exports = Todos;
