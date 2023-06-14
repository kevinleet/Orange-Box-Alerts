const { User, Product } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    let users;
    if (req.query.email) {
      users = await User.find({ email: req.query.email });
    } else {
      users = await User.find();
    }
    res.json(users);
  } catch (error) {
    res.send(error);
  }
};

const createUser = async (req, res) => {
  try {
    let user = await User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      subscription_active: false,
      notify_all_restocks: false,
      products_to_alert: [],
      admin: false,
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

const updateAllRestocks = async (req, res) => {
  try {
    let user = await User.updateOne(
      { email: req.body.email },
      {
        $set: { notify_all_restocks: req.body.notify_all_restocks },
      }
    );
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

const updateProductAlerts = async (req, res) => {
  try {
    if (req.body.action == "add") {
      let user = await User.findOneAndUpdate(
        { email: req.body.email },
        { $push: { productsToAlert: req.body.product } }
      );
      res.send(user);
    } else if (req.body.action == "remove") {
      let user = await User.findOneAndUpdate(
        { email: req.body.email },
        { $pull: { productsToAlert: req.body.product } }
      );
      res.send(user);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUserSubscription = async (req, res) => {
  try {
    if (req.body.action == "activate") {
      let user = await User.findOneAndUpdate(
        { _id: req.body.id },
        { $set: { subscription_active: "true" } }
      );
      res.send(user);
    } else if (req.body.action == "deactivate") {
      let user = await User.findOneAndUpdate(
        { _id: req.body.id },
        { $set: { subscription_active: "false" } }
      );
      res.send(user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateAllRestocks,
  updateProductAlerts,
  updateUserSubscription,
};
