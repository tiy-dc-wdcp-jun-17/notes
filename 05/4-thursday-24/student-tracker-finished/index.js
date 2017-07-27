const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const session = require('express-session')

if (app.get('env') == 'production') {
  app.use(morgan('common', {
    skip: function(req, res) {
      return res.statusCode < 400
    },
    stream: __dirname + '/../morgan.log'
  }));
} else {
  app.use(morgan('dev'));
}

app.use(session({
  secret: '1234981234879sdfa98asf',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  var views = req.session.views

  if (!views) {
    views = req.session.views = {}
  }

  // get the url pathname
  var pathname = req.url

  // count the views
  views[pathname] = (views[pathname] || 0) + 1

  next()
})


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
  console.log(`Node runnning in ${app.get('env')} mode at http://localhost:3000`);
})
