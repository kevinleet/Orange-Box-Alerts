const express = require("express");
const Router = express.Router();
const controller = require("../controllers/restockController");

Router.get("/", controller.getAllRestocks);

module.exports = Router;
