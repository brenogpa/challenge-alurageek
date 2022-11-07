const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(
  "mongodb+srv://brenogpa:bb1703@bstorage.kfumj4o.mongodb.net/?retryWrites=true&w=majority"
);

// Carrega os models
const Product = require("./models/product");
const User = require("./models/user");

// Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-routes");
const userRoute = require("./routes/user-routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

module.exports = app;
