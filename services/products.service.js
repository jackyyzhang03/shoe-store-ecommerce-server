const fs = require("fs");
const path = require("path");

const findAllProducts = async () => {
  return JSON.parse(
    await fs.promises.readFile(path.join(__dirname, "../products.json"))
  );
};

const findProductById = async (id) => {
  const products = JSON.parse(
    await fs.promises.readFile(path.join(__dirname, "../products.json"))
  );
  for (let category of Object.values(products)) {
    for (let item of category) {
      if (item.productId === id) {
        return item;
      }
    }
  }
  return undefined;
};

module.exports = {
  findAllProducts: findAllProducts,
  findProductById: findProductById,
};
