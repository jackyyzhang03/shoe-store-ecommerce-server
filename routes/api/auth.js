const express = require("express");
const router = express.Router();

const authValidator = require("../../middlewares/validators/auth.validator");
const bodyParser = require("../../middlewares/body-parser.middleware");
const authMiddleware = require("../../middlewares/auth.middleware");
const authController = require("../../controllers/auth.controller");

router.post(
  "/login",
  authValidator.authValidator,
  bodyParser.bodyParser,
  authMiddleware.authenticateUser,
  authController.createSession,
);

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.status(200).end();
});

module.exports = router;
