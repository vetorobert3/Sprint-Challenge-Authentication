const User = require('../users/users-model.js');
const db = require('../database/connection.js');
const server = require('../api/server.js');
const request = require('supertest');

describe('testing API calls', () => {

  describe("Register tests", () => {
    describe("register()", () => {
      it("should register a new user", async () => {
        await User.add({ username: "veto6", password: "password" });

        const user = await db("users");

        expect(user).toHaveLength(1);
      })
    })

        describe('has user property', () => {
      test('registers successfully with res 201', () => {
        return request(server)
          .post('/api/auth/register')
          .send({ "username": "lucie3", "password": "dance" })
          .then(res => {
            expect(res.status).toBe(201)
          })
      })
    })
  })

  describe('users successfully registered', () => {
    describe('has user property', () => {
      test('registers successfully with res 201', () => {
        return request(server)
          .post('/api/auth/register')
          .send({ "username": "bob1", "password": "accountant" })
          .then(res => {
            expect(res.status).toBe(201)
          })
      })
    })
  })

  describe('login test', () => {
    describe('successful login', () => {
      it('should login successfully', () => {
        return request(server)
        .post('/api/auth/login')
        .send({ "username": "bob1", "password": "accountant" })
        .then(res => {
          expect(res.status).toBe(200)
        });
      })
    })
  })
});