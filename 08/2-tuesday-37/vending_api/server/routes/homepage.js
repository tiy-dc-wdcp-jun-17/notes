const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { secondsToRender: Date.now() - req._startTime });
});

module.exports = router;
