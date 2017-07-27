const express = require("express");
const router = express.Router();

let students = [];

router.get("/", (req, res) => {
  res.render("index", {
    students: students
  });
});

router.post("/students", (req, res) => {
  console.log("New Post request", req.body);
  req.checkBody("studentName", "You must provide a name.").notEmpty();

  req.getValidationResult().then(result => {
    if (!result.isEmpty()) {
      res.render("index", { error: "You made mistake broasauras Rex" });
      return;
    }

    students.push({
      name: req.body.studentName,
      createdAt: new Date()
    });
    res.redirect("/");
  });
});

module.exports = router;
