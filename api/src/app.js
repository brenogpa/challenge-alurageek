const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index-route");
const routes = require("./routes/product-routes");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/routes", routes);

module.exports = app;
