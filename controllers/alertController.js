const { Alert } = require("../models");

const getAllAlerts = async (req, res) => {
  try {
    let alerts;
    if (req.query.sku && req.query.user) {
      alerts = await Alert.find({ sku: req.query.sku, user: req.query.user });
    } else {
      alerts = await Alert.find();
    }

    res.json(alerts);
  } catch (error) {
    res.send(error);
  }
};

const createAlert = async (req, res) => {
  try {
    let alert = new Alert({
      sku: req.body.sku,
      user: req.body.user,
    });
    await alert.save();
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllAlerts,
  createAlert,
};
