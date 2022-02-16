// Services.
const productsService = require("../services/products.service");

const returnAllProducts = async (req, res, next) => {
  const products = await productsService.findAllProducts();
  return res.status(200).json(products);
};

const returnProductById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const product = await productsService.findProductById(id);
  if (product === undefined) {
    return next({
      status: 404,
      message: "Product not found",
      data: { productId: id },
    });
  }
  return res.status(200).json(product);
};

module.exports = {
  returnAllProducts: returnAllProducts,
  returnProductById: returnProductById,
};
