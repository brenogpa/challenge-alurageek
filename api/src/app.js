const express = require("express");
const db = require("./config/dbConnect.js");
const routes = require("./routes/index.js");
const cors = require("cors");

db.on("error", console.log.bind(console), "DB CONNECTION ERROR");
db.once("open", () => {
  console.log("DB connected");
});

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

routes(app);

module.exports = app;
