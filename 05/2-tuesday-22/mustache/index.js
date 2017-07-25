const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
// SETUP MUSTACHE
const mustacheExpress = require('mustache-express');
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache")
app.set("views", path.join(__dirname, "views") )
// DONE SETTING UP MUSTACHE

const DATA = {
  instructors: [
    {
      firstName: "Russell",
      lastName: "Osborne",
      employed: false
    },
    {
      firstName: "Michael",
      lastName: "O'Brien",
      employed: false,
    }
  ]
}

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  // RENDER the mustache template in views/
  res.render("homepage", DATA)
});

app.get("/instructors/:firstName", function(req, res) {

  console.log(req.params.firstName);


  // let foundInstructor;
  // DATA.instructors.forEach(function(instructor){
  //   if (instructor.firstName === req.params.firstName) {
  //     foundInstructor = instructor;
  //   }
  // });

  // let foundInstructor = DATA.instructors.find(function(instructor){
  //   return instructor.firstName === req.params.firstName
  // })

  let foundInstructor = DATA.instructors.find(instructor =>
    instructor.firstName === req.params.firstName
  )

  res.render("homepage", { instructors: foundInstructor})
});

app.get("/styles.css", (req, res) => {
  res.send(fs.readFileSync('./styles.css'));
});

app.listen(3000, function() {
  console.log("it works");
  console.log(__dirname);
});
