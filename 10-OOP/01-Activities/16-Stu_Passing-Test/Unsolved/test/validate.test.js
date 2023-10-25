const Validate = require('../validate.js');

describe('Validate', () => {
  it('testing less than 8', () => {
      const pswlnth = new Validate('HelloThere1s')
      const pass = pswlnth.isPassword();
      console.log(pass)
      expect(pass).toBe(true)

  })
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});
