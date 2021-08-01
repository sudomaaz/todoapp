const todo = require("../models/todo");

exports.fetchAllTodo = async function (request, h) {
  const items = await todo.query();

  return items;
};

exports.fetchSingleTodo = async function (request, h) {
  const items = await todo.query().findById(request.params.id);

  return items;
};

exports.createSingleTodo = async function (request, h) {
  const items = await todo.query().insert({
    name: request.payload.name,
    description: request.payload.description,
  });

  return items;
};

exports.updateSingleTodo = async function (request, h) {
  const items = await todo.query().findById(request.params.id).patch({
    name: request.payload.name,
    description: request.payload.description,
  });

  return "Iteam has been updated";
};

exports.deleteSingleTodo = async function (request, h) {
  const items = await todo.query().deleteById(request.params.id);

  return "Item has been deleted";
};
