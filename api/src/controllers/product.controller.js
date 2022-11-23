const products = require("../models/Product.js");

class ProductController {
  static getProducts = (req, res) => {
    products.find((err, products) => {
      res.status(200).json(products);
    });
  };

  static getProductsById = (req, res) => {
    const id = req.params.id;
    products.findById(id, (err, Product) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id do produto não encontrado` });
      } else {
        res.status(200).send(Product);
      }
    });
  };

  static addProduct = (req, res) => {
    let product = new products(req.body);
    products.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao adicionar produto` });
      } else {
        res.status(201).send({ message: "Produto adicionado com sucesso!" });
      }
    });
  };

  static updateProduct = (req, res) => {
    const id = req.params.id;
    products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteProduct = (req, res) => {
    const id = req.params.id;
    products.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Produto removido com sucesso!" });
      } else {
        res.status(500).send({ message: "erro ao deletar produto" });
      }
    });
  };
}

module.exports = ProductController;
