const express = require("express");
const router = express.Router();

let students = [];

router.get("/", (req, res) => {

  // let studentsThatStartWithLetterE = [];
  // students.forEach((student) => {
  //   if (student.name.toLowerCase() === "e") {
  //     studentsThatStartWithLetterE.push(student);
  //   }
  // })

  let studentsThatStartWithLetterE = students.filter((student) => {
    return student.name[0].toLowerCase() === "e"
  })

  res.render("index", {
    students: students,
    studentsThatStartWithLetterE:  studentsThatStartWithLetterE,
    loggedInUser: req.session.name
  });
});

router.get("/pick-a-random-student", (req, res) => {
  let randomStudent = students[Math.floor(Math.random() * students.length)]

  res.render("showStudent", {student: randomStudent})
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
