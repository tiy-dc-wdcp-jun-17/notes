const express = require("express");
const router = express.Router();

let students = [];

router.get("/", (req, res) => {
  console.log(Object.entries(req.session.views).map((k, v) => {
    return { key: k, value: v };
  }));
  res.render("index", {
    students: students,
    views: Object.entries(req.session.views).map((view) => {
      return { key: view[0], value: view[1] };
    })
  });
});

// ?studentName="Emily%20D"&button=
// router.post("/students", (req, res) => {
//   console.log("New Post request", req.body);
//   if (req.body.studentName.length > 1) {
//     students.push({
//       name: req.body.studentName,
//       createdAt: new Date()
//     })
//   }
//   res.redirect("/")
// })

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
