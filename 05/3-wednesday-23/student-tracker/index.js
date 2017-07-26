const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

// Turn on default template engine
app.set('view engine', 'mustache');

// Set where we store our views
app.set('views', __dirname + '/views');


// Setup Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// Setup Express Validator
app.use(expressValidator());

app.use(require("./studentRoutes"));

app.listen(3000, () => {
  console.log("Node runnning at http://localhost:3000");
})
