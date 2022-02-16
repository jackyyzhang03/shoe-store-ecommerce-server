const express = require("express");
const router = express.Router();

const productController = require("../../controllers/products.controller");

router.get(
  "/",
  (req, res, next) => {
    console.log(req.session.id);
    console.log(req.session);
    next();
  },
  productController.returnAllProducts
);

router.get("/:id", productController.returnProductById);

module.exports = router;
