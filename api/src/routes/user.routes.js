const express = require("express");
const UserController = require("../controllers/user.controller.js");
const UserAuthenticate = require("../authentication/auth.js");

const router = express.Router();

router
  .get("/users", UserController.getUsers)
  .get("/users/:id", UserController.getUsersById)
  .post("/users", UserController.addUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser)

  .post("/users/authenticate", UserAuthenticate.auth);

module.exports = router;
