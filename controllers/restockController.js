const { Restock } = require("../models");

const getAllRestocks = async (req, res) => {
  try {
    let products = await Restock.find();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
};

const getMostRecentRestock = async (req, res) => {
  try {
    let product = await Restock.findOne().sort({ date_unix: -1 });
    res.json(product);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllRestocks,
  getMostRecentRestock,
};
