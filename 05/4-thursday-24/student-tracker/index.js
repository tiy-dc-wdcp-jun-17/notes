const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const url = require("url")

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

// Turn on default template engine
app.set("view engine", "mustache");

// Set where we store our views
app.set("views", __dirname + "/views");

// Setup Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Express Validator
app.use(expressValidator());

// Our Custom Logger
const bestLogger = require("./bestLogger");
app.use(bestLogger(true));


// Best LowerCase Path Maker thing
app.use(function _lowercasePaths(req, res, next) {
  if (req.path.toLowerCase() !== req.path) {
    res.redirect(req.path.toLowerCase());
  } else {
    next();
  }
});

// The Secret Webpage if you go to ?theSecret=neoistheone
app.use((req, res, next) => {
  if (req.query.theSecret === "neoistheone") {
    res.send("Take the red pill.");
    return;
  }

  next();
});

// app.use(require("./studentRoutes"));

app.get("/stupid-program", (req, res) => {
  res.send("the last handler");
});

app.listen(3000, () => {
  console.log(
    `Node runnning in ${app.get("env")} mode at http://localhost:3000`
  );
});
