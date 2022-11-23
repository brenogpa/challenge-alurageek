const app = require("./src/app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`api listening in http://localhost:${port}`);
});
