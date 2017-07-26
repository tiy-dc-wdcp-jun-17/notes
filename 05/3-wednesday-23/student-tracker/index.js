const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');


// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

// Turn on default template engine
app.set('view engine', 'mustache');

// Set where we store our views
app.set('views', __dirname + '/views');


// Setup Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let students = []

app.get("/", (req, res) => {
  res.render("index", {students: students})
});

// ?studentName="Emily%20D"&button=
app.post("/", (req, res) => {
  console.log("New Post request", req.body);
  students.push({
    name: req.body.studentName,
    createdAt: new Date()
  })
  res.redirect("/")
})






app.listen(3000, () => {
  console.log("Node runnning at http://localhost:3000");
})
