class Validate {

  constructor(password){
    this.password = password
  }
  // isPassword(password){}
}

Validate.prototype.isPassword = (password) => {
  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  // if (Validate.length < 8){
  //   return this.password= false;
  // }
  // return /^([a-z])([A-Z])(\d).*$/g.test(password);

  if(!/[a-z]/g.test(password)) {return false}
  if(!/[A-Z]/.test(password)) {return false}
  // if(!/[0-9]/g.test(password)) {return false}
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
  return true
};

module.exports = Validate;
// (?=.*[A-Z]).(?=.*[a-z])