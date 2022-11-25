const users = require("../models/User.js");

class UserController {
  static getUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users);
    });
  };

  static getUsersById = (req, res) => {
    const id = req.params.id;
    users.findById(id, (err, User) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id do usuário não encontrado` });
      } else {
        res.status(200).send(User);
      }
    });
  };

  static addUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao criar usuário` });
      } else {
        res.status(201).send({ message: "Usuário criado com sucesso!" });
      }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário removido com sucesso!" });
      } else {
        res.status(500).send({ message: "erro ao deletar usuário" });
      }
    });
  };
}

module.exports = UserController;
