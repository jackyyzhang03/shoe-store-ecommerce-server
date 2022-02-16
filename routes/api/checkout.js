const express = require("express");
const session = require("express-session")
const router = express.Router();

// Middlewares.
const checkoutMiddleware = require("../../middlewares/checkout.middleware");
const checkoutValidator = require("../../middlewares/validators/checkout.validator");
const bodyParser = require("../../middlewares/body-parser.middleware")
const checkoutController = require("../../controllers/checkout.controller");

router.post(
  "/",
  checkoutValidator.orderValidator,
  bodyParser.bodyParser,
  checkoutMiddleware.stripeOrderParser,
  checkoutController.stripeCheckout
);

module.exports = router;
