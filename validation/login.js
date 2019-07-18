const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator function
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  //Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  //check length password
  else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters and less than 31";
  } else if (!Validator.isAlphanumeric(data.password)) {
    errors.password = "Password must have number and characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
