const express = require('express');
const router = express.Router();
const Book = require("../models/book")
const Author = require("../models/author")

router.get("/authors/:id/books/new", (req, res) => {
  const author = Author.findById(req.params.id);

  res.render("books/new", { author: author });
});

router.get("/authors/:authorId/books/:id", (req, res) => {
  const book = Book.findById(req.params.id);

  const author = Author.findById(req.params.authorId);

  res.render("books/show", { author: author, book: book });
});

router.post("/authors/:authorId/books", (req, res) => {
  throw new Error()
  Book.create({
    authorId: req.params.authorId,
    title: req.body.title,
    description: req.body.description,
    coverUrl: req.body.coverUrl
  });

  // res.redirect(`/authors/${req.params.authorId}`);
});

module.exports = router;
