const app = require("../../app");

const Book = require("../../models/book");

const request = require("supertest");
describe("app", () => {
  describe("POST /authors/:authorId/books", () => {
    it("adds a new book to the db", done => {
      let prevCount = Book.all.length;

      return request(app)
        .post("/authors/1/books")
        .field("title", "David Copperfield")
        .field("description", "A Book")
        .field("coverUrl", "https://placebear.com/200/300")
        .expect((err, res) => {
          if (err) throw err;
          return expect(res.text) === "tet"
        })
        .expect(302)
        .expect("Location", "/home")
        .expect((err, res) => {
          return expect(Book.all.length).toBe(prevCount + 1);
        })
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  });
});
