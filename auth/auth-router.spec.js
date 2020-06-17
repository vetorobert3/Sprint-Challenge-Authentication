const User = require('../users/users-model.js');
const db = require('../database/connection.js');
const server = require('../api/server.js');
const request = require('supertest');

describe('testing API calls', () => {

  describe("Add a user", () => {
    describe("register()", () => {
      it("should register a new user", async () => {
        await User.add({ username: "veto3", password: "password" });

        const user = await db("users");

        expect(user).toHaveLength(10);
      })
    })
  })

  describe('has users', () => {
    describe('has user property', () => {
      test('registers successfully with res 201', () => {
        return request(server)
          .post('/api/auth/register')
          .send({ "username": "lucie1", "password": "dance" })
          .then(res => {
            expect(res.status).toBe(201)
          })
      })
    })
  })
});