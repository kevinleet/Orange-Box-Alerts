const { Restock } = require("../models");

const getAllRestocks = async (req, res) => {
  try {
    let products = await Restock.find();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllRestocks,
};
