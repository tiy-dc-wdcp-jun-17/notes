const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const url = require("url");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const allowedUsers = {
  email: "russell@theironyard.com",
  password: "loll you thought I would type my real passsword trooll"
};

// Setup cookie parser
app.use(cookieParser());

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

// Log to a file using the common format.
const fs = require("fs");
const logStream = fs.createWriteStream(__dirname + "/access.log", {
  flags: "a"
});
app.use(
  morgan("common", {
    stream: logStream
  })
);

// Log to STDOUT with the dev format
app.use(morgan("dev"));

// Setup a session store using express-session
app.use(
  session({
    secret: "1823-984719824798127349878971239-8adpsuifhlkjhak;jfads",
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
  })
);

// Track our views
app.use((req, res, next) => {
  console.log(req.session);

  if (!req.session.views) {
    req.session.views = 0;
  }

  req.session.views += 1;
  next();
});

// const sessionStore = {};
// app.use( (req, res, next) => {
//   // res.setHeader("Set-Cookie", "1231341; 123498890901824091234klasdjflkads;")
//   console.log(req.cookies)
//
//   if (!req.cookies.session_id) {
//     res.cookie("session_id", Math.floor(Math.random() * 100000) )
//   }
//
//   let oldViewsValue = 0;
//   if (sessionStore[req.cookies.session_id]) {
//     oldViewsValue = sessionStore[req.cookies.session_id].views
//   }
//
//   sessionStore[req.cookies.session_id] = { views:  oldViewsValue + 1  }
//
//   console.log(sessionStore)
//   next();
// })

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
  if (req.body.email === "neoistheone") {
    // res.send("Take the red pill.");

    req.session.name = req.query.name;
  }

  next();
});

// Load our student routes at the root level
app.use(require("./studentRoutes"));

// Load our student routes nested under /another-place
// app.use('/another-place', require("./studentRoutes"));
app.listen(3000, () => {
  console.log(
    `Node runnning in ${app.get("env")} mode at http://localhost:3000`
  );
});
