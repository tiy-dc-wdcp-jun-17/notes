const Author = require("../../models/author")
describe("Author", () => {
  describe(".all", () => {
    it("returns a non empty array", () => {
      expect(Author.all).not.toEqual([])
    })

    it("returns an array with elements", () => {
      expect(Author.all.length).toEqual(3);
    })
  })

  describe(".findById", () => {
    it("returns a valid author object if ID is present", () => {
      expect(Author.findById(2).name).toBe("Max Brooks")
    })

    it("returns undefined for an invalid ID", () => {
      expect(Author.findById(1230809140)).not.toBeDefined()
    })
  })
})
