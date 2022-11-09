const repository = require("../repositories/product-repository");

//------------Método(s) GET---------------

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getBySlug = async (req, res, next) => {
  try {
    var data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getByTag = async (req, res, next) => {
  try {
    const data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

//------------Método(s) POST---------------

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: "Produto cadastrado com sucesso!" });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao cadastrar o produto",
    });
  }
};

//------------Método(s) PUT---------------

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
      message: "Produto atualizado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao atualizar o produto",
    });
  }
};

//------------Método(s) DELETE---------------

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: "Produto removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao deletar o produto",
    });
  }
};
