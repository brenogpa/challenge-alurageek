const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String},
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model("users", UserSchema);

module.exports = users;
