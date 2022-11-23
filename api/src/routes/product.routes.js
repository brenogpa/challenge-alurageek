const express = require("express");
const ProductController = require("../controllers/product.controller.js");

const router = express.Router();

router
  .get("/products", ProductController.getProducts)
  .get("/products/:id", ProductController.getProductsById)
  .post("/products", ProductController.addProduct)
  .put("/products/:id", ProductController.updateProduct)
  .delete("/products/:id", ProductController.deleteProduct);

module.exports = router;
