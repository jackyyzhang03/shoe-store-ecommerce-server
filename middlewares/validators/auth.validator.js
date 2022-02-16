const { body } = require("express-validator");

const authValidator = [
  body("username").isString(),
  body("password").isString(),
];

module.exports = {
  authValidator: authValidator,
};
