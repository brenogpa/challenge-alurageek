const express = require("express");

const products = require("./product.routes.js");
const users = require("./user.routes.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "ok" });
  });
  app.use(express.json(), products, users);
};

module.exports = routes;
