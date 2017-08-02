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

app.get("/authors/:id/books/new", (req, res) => {
  const author = Author.findById(req.params.id);

  res.render("books/new", { author: author });
});

app.post("/authors/:authorId/books", (req, res) => {
  books.push({
    id: books.length + 1,
    authorId: req.params.authorId,
    title: req.body.name,
    description: req.body.bio,
    coverUrl: req.body.url
  });

  req.redirect(`/authors/${req.params.authorId}`);
});


app.listen(3000, () => {
  console.log("Node Application running at http://localhost:3000");
});
