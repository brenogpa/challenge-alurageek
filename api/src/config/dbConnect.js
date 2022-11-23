const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@bstorage.kfumj4o.mongodb.net/alurageekDB"
);

let db = mongoose.connection;

module.exports = db;
