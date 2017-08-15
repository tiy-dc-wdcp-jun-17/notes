const app = require("../../index");
const request = require('supertest');

describe('Item Router', () => {
    describe('GET /api/customer/items - get a list of items', () => {
      it('has successful status code', () => {
        return request(app)
          .get("/api/customer/items")
          .expect(200);
      });
    });
});
