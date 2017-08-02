const app = require("../../app");

const Book = require("../../models/book")

const request = require("supertest");
describe("app", () => {
  describe("POST /authors/:authorId/books", () => {
    it("adds a new book to the db", () => {
      let prevCount = Book.all.length

      return request(app)
        .post("/authors/1/books")
        .field('title', 'David Copperfield')
        .field('description', "A Book")
        .field('coverUrl', "https://placebear.com/200/300")
        .expect((res) => {
          console.log(res.body);
        })
        .expect(302)
        .expect(() => {
          expect(Book.all.length).toBe(prevCount + 1)
        })

    })
  })
})
