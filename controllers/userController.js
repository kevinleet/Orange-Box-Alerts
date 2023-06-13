const { User } = require("../models");

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
    await User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      subscription_active: false,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
