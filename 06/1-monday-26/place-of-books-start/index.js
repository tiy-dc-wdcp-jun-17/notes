const express = require("express");
const app = express();
const path = require('path')
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));

// Expose the public folder to the internet to serve CSS / Frontend JS
app.use("/public", express.static(path.join(__dirname, "public")));

let authors = [
  {
    id: 1,
    name: "Charles Dickens",
    bio:
      "British novelist Charles Dickens was born on February 7, 1812, in Portsmouth, England. Over the course of his writing career, he wrote the beloved classic novels Oliver Twist, A Christmas Carol, Nicholas Nickleby, David Copperfield, A Tale of Two Cities and Great Expectations. On June 9, 1870, Dickens died of a stroke in Kent, England, leaving his final novel, The Mystery of Edwin Drood, unfinished."
  },
  {
    id: 2,
    name: "Max Brooks",
    bio:
      "Maximillian Michael Brooks (born May 22, 1972) is an American author. He is the son of comedy filmmaker Mel Brooks and actress Anne Bancroft. Much of Brooks's writing focuses on zombie stories"
  },
  {
    id: 3,
    name: "Agatha Christie",
    bio:
      "Born on September 15, 1890, in Torquay, England, Agatha Christie published her first novel, The Mysterious Affair at Styles, in 1920, and went on to become one of the most famous writers in history, with mysteries like Murder at the Vicarage, Partners in Crime and Sad Cypress. She sold billions of copies of her work, and was also a noted playwright and romance author. She died on January 12, 1976."
  }
];
const books = [
  {
    id: 1,
    authorId: 2,
    title: "World War Z",
    description:
      "World War Z: An Oral History of the Zombie War is a 2006 apocalyptic horror novel by Max Brooks. The novel is a collection of individual accounts narrated by an agent of the United Nations Postwar ",
    coverUrl:
      "https://t1.gstatic.com/images?q=tbn:ANd9GcTQ02Snscqfb0tz2J9lcZz4REGvLHPQ_xYBfWa6BF6jYLsjhJsT"
  },
  {
    id: 2,
    authorId: 1,
    title: "A Tale of Two Cities",
    description:
      "A Tale of Two Cities was the twelfth novel of Charles Dickens.  The first chapters of the book appeared in print in April of 1859.  The last chapter was printed in November of that same year.",
    coverUrl: "http://www.charlesdickensinfo.com/images/Tale.jpg"
  },
  {
    id: 3,
    authorId: 1,
    title: "Oliver Twist",
    description:
      "Oliver Twist was the second novel of Charles Dickens.  It was initially published in monthly installments that began in February of 1837 and ended in April of 1839.  The publication of Oliver Twist began before the monthly publication of The Pickwick Papers ended. The two novels overlapped for nine months.  Additionally  Dickens started Nicholas Nickleby (also issued in monthly installments) before Twist finished publication.  Those two novels overlapped for nine months as well.",
    coverUrl: "http://www.charlesdickensinfo.com/images/Twist.jpg"
  }
];

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/authors", (req, res) => {
  res.render("authors/index", { authors: authors });
});

app.post("/authors", (req, res) => {
  authors.push({
    id: authors.length + 1,
    name: req.body.name,
    bio: req.body.bio
  });

  res.redirect("/authors");
});

app.get("/authors/:id", (req, res) => {
  const author = authors.find(el => {
    return el.id == req.params.id;
  });

  const authorBooks = books.filter(el => {
    return el.authorId == author.id;
  });

  res.render("authors/show", { author: author, books: authorBooks });
});

app.get("/authors/:id/books/new", (req, res) => {
  const author = authors.find(el => {
    return el.id == req.params.id;
  });

  res.render("books/new", { author: author });
});

app.post("/authors/:authorId/books", (req, res) => {
  books.push({
    id: authors.length + 1,
    authorId: req.params.authorId,
    title: req.body.name,
    description: req.body.bio,
    coverUrl: req.body.url
  });

  req.redirect(`/authors/${req / params.authorId}`);
});

app.get("/authors/:authorId/books/:id", (req, res) => {
  const book = books.find(el => {
    return el.id == req.params.id;
  });

  const author = authors.find(el => {
    return el.id == book.authorId;
  });

  res.render("books/show", { author: author, book: book });
});

app.listen(3000, () => {
  console.log("Node Application running at http://localhost:3000");
});
