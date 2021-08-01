"use strict";

const Hapi = require("@hapi/hapi");
const dotenv = require("dotenv");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");
const routes = require("./routes/routes");
const setupDB = require("./db/db");

dotenv.config({ path: "config/.env" });

setupDB();

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

const swaggerOptions = {
  info: {
    title: "Todo App API Documentation",
    version: Pack.version,
  },
};

async function init() {
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
  server.route(routes);
  await server.start();

  console.log(`server started at ${server.info.uri}`);
}

init();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});