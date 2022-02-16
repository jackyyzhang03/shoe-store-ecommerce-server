const productsService = require("../services/products.service");

const stripeOrderParser = async (req, res, next) => {
  const items = await Promise.all(
    req.body.orders.map(async ({ productId, quantity }) => {
      const product = await productsService.findProductById(productId);
      return {
        price_data: {
          currency: "cad",
          product_data: {
            name: product.name,
            images: product.images,
          },
          unit_amount: product.priceInCents,
          tax_behavior: "exclusive",
        },
        quantity: quantity,
      };
    })
  );
  req.body.items = items;
  return next();
}

module.exports = {
  stripeOrderParser: stripeOrderParser,
}