const express = require("express");
const app = express();
const path = require('path')
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

const Author = require('./models/author');

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));

// Expose the public folder to the internet to serve CSS / Frontend JS
app.use("/public", express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
  res.render("homepage");
});

app.use(require("./routes/authors"))

app.use(require("./routes/books"))


module.exports = app
