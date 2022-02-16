const express = require("express");
const router = express.Router();

// TODO: Implement get cart.
router.get(
  "/", (req, res) => {
    return res.status(200).json({"Cart for user:": req.session.user});
  }
);

// TODO: Implement add cart item.
router.post(
  "/"
)

// TODO: Implement update cart item.
// TODO: Implement remove cart item.

module.exports = router;
