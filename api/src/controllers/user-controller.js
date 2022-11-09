const repository = require("../repositories/user-repository");

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao cadastrar o usuário",
    });
  }
};
