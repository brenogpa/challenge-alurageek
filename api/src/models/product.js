const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, require: true },
  category: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  image: { type: String, require: true },
});

const products = mongoose.model("products", ProductSchema);

module.exports = products;
