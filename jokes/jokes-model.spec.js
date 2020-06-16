const { add, findById, findBy } = require('./jokes-model.js');

describe('tests for API calls', () => {
  describe('add test', () => {
    it('should add a user', async () => {

      const user = {
        1: "veto"
      };

      const expected = {
        1: "veto"
      };

      const addUser = add(user);

      await expect(addUser).toBe(expected);
    });
  });

  // describe('findById test', () => {
  //   it('should return users', () => {

  //     expect(findById(0)).toBe(1)
  //   })
  // })
})