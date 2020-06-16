const { add, findBy, findById } = require('../users/users-model.js');

describe('testing API calls', () => {
  // describe('testing add function', () => {
  //   it('should get first user', async () => {

  //     const name = await add();

  //     expect(name).toBe('veto')

  //   });
  // });
  describe("Add a user", () => {
    describe("register()", () => {
      it("should register a new user", async () => {
        await User.add({ username: "Evelyn", password: "password" })
        const user = await db("users")
        expect(user).toHaveLength(1)
      })
  
      // it("should return a user token login()", async () => {
      //   const res = await request(auth)
      //     .post("/api/auth/register")
      //     .send({ username: "Evelyn", password: "password" })
      //   expect(res.body.token).toBeTruthy()
      // })
    })
  })
  
});