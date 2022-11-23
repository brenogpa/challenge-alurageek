const express = require("express");
const UserController = require("../controllers/user.controller.js");

const router = express.Router();

router
  .get("/users", UserController.getUsers)
  .get("/users/:id", UserController.getUsersById)
  .post("/users", UserController.addUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser);

module.exports = router;
