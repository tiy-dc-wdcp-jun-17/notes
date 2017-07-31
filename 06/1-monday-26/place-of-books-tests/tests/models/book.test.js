const Book = require("../../models/book");
// Add a method Book.create to store a new book in our model.

describe("Book", () => {

  describe(".create", () => {

    it("returns an array with all books", () => {
      const newBooks = Book.create({
        authorId: 1,
        title: "David Copperfield",
        description: "A book",
        coverUrl: "https://placebear.com/200/300"
      })

      expect(newBooks.length).toBe(4);
    });

  });

});
