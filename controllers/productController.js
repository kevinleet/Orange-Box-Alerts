const { Product } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllProducts,
};
