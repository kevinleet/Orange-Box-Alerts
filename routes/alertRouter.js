const express = require("express");
const Router = express.Router();
const controller = require("../controllers/alertController");

Router.get("/", controller.getAllAlerts);

Router.post("/", controller.createAlert);

module.exports = Router;
