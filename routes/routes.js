const handler = require("../controllers/todo");
const Joi = require("joi");
module.exports = [
  {
    method: "GET",
    path: "/",
    handler: handler.fetchAllTodo,
    options: {
      description: "Get all todo",
      notes: "Returns all todo items",
      tags: ["api"], // ADD THIS TAG
    },
  },
  {
    method: "GET",
    path: "/todo/{id}",
    handler: handler.fetchSingleTodo,
    options: {
      description: "Get single todo",
      notes: "Returns a single todo item by the id passed in the path",
      tags: ["api"], // ADD THIS TAG
      validate: {
        params: Joi.object({
          id: Joi.number().required().description("the id for the todo item"),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/todo/new",
    handler: handler.createSingleTodo,
    options: {
      description: "Post single todo",
      notes: "Creates a single todo item",
      tags: ["api"], // ADD THIS TAG
      validate: {
        payload: Joi.object({
          name: Joi.string()
            .required()
            .description("the name for the todo item"),
          description: Joi.string()
            .required()
            .description("the description for the todo item"),
        }),
      },
    },
  },
  {
    method: "PUT",
    path: "/todo/{id}",
    handler: handler.updateSingleTodo,
    options: {
      description: "Update single todo",
      notes: "Updates a single todo item",
      tags: ["api"], // ADD THIS TAG
      validate: {
        payload: Joi.object({
          name: Joi.string().description("the name for the todo item"),
          description: Joi.string().description(
            "the description for the todo item"
          ),
        }),
        params: Joi.object({
          id: Joi.number().required().description("the id for the todo item"),
        }),
      },
    },
  },
  {
    method: "DELETE",
    path: "/todo/{id}",
    handler: handler.deleteSingleTodo,
    options: {
      description: "Deletes single todo",
      notes: "Deletes a single todo item",
      tags: ["api"], // ADD THIS TAG
      validate: {
        params: Joi.object({
          id: Joi.number().required().description("the id for the todo item"),
        }),
      },
    },
  },
];
