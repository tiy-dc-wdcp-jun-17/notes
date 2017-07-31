const express = require('express');
const router = express.Router();
const Book = require("../models/book")
const Author = require("../models/author")

router.get("/authors/:authorId/books/:id", (req, res) => {
  const book = Book.findById(req.params.id);

  const author = Author.findById(req.params.authorId);

  res.render("books/show", { author: author, book: book });
});

module.exports = router;
   
