const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(
    `Node is running in ${app.get("env")} mode at http://localhost:${PORT}`
  );
});
