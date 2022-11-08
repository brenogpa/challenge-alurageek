const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.get = (req, res, next) => {
  User.find({}, "name email password")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.create = (req, res, next) => {
  var user = new User(req.body);
  user
    .save()
    .then((x) => {
      res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    })
    .catch((e) => {
      res
        .status(400)
        .send({ message: "Falha ao cadastrar o usuário.", data: e });
    });
};