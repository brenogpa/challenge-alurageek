const repository = require("../repositories/user-repository");
const md5 = require("md5");

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });
    res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao cadastrar o usuário",
    });
  }
};
