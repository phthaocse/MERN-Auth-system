const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator function
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.date_birth = !isEmpty(data.date_birth) ? data.date_birth : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";
  //first name and last name check
  if (Validator.isEmpty(data.firstname))
    errors.firstname = "First Name field is required";
  if (Validator.isEmpty(data.lastname))
    errors.lastname = "Last Name field is required";
  //Name check
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  //Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //Date check
  if (Validator.isEmpty(data.date_birth))
    errors.date_birth = "Date field is require";
  //Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  } else if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Confirm password field is required";
  }
  //check length password
  else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters and less than 31";
  } else if (
    Validator.isAlpha(data.password) ||
    Validator.isNumeric(data.password)
  ) {
    errors.password = "Password must have number and characters";
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Password must be matched";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
