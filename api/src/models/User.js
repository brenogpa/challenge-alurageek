const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    email: { type: String, require: true },
    password: { type: String, require: true, select: false },
  },
  {
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const users = mongoose.model("users", UserSchema);

module.exports = users;
