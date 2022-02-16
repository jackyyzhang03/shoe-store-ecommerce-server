const { body } = require("express-validator");

const orderValidator = [
  body("orders.*.productId").isInt(),
  body("orders.*.quantity").isInt(),
];

module.exports = {
  orderValidator: orderValidator,
};
