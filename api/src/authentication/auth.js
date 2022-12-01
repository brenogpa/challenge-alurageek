const bcrypt = require("bcrypt");
const users = require("../models/user.js");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

class UserAuthenticate {
  static auth = async (req, res) => {
    const { email, password } = req.body;

    const user = await users.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Invalid Password" });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    res.send({ user, token });
  };
}

module.exports = UserAuthenticate;
