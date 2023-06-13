const { Product } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
};

const updateUsersToAlert = async (req, res) => {
  try {
    if (req.body.action == "add") {
      let product = await Product.findOneAndUpdate(
        { _id: req.body.product },
        { $push: { usersToAlert: req.body.user } }
      );
      res.send(product);
    } else if (req.body.action == "remove") {
      let product = await Product.findOneAndUpdate(
        { _id: req.body.product },
        { $pull: { usersToAlert: req.body.user } }
      );
      res.send(product);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  updateUsersToAlert,
};
