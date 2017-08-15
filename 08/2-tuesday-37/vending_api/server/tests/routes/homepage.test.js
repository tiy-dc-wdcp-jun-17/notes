const app = require("../../index.js");
const request = require("supertest");

describe("Homepage router", () => {
  describe("GET /", () => {
    it("will return a status code of 200", () => {
      return request(app)
      .get("/")
      .expect(200)
    });

    it("will return a performance data in the body", () => {
      return request(app)
      .get("/")
      .expect((req) => {
        req.text.includes("This page was rendered in")
      });
    });
  });
});
