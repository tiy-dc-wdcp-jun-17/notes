const express = require('express');
const router = express.Router()

const Author = require('../models/author');
const Book = require("../models/book");

router.get("/authors", (req, res) => {
  res.render("authors/index", { "authors": Author.all });
});

// router.post("/authors", (req, res) => {
//   authors.push({
//     id: authors.length + 1,
//     name: req.body.name,
//     bio: req.body.bio
//   });
//
//   res.redirect("/authors");
// });

router.get("/authors/:id", (req, res) => {
  const author = Author.findById(req.params.id);

  const authorBooks = Book.filterByAuthorId(req.params.id)

  if (author) {
    res.render("authors/show", { author: author, books: authorBooks });
  } else {
    res.render("errors/404", { message: "That author could not be found"})
  }
});


module.exports = router;
