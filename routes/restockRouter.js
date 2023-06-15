const express = require("express");
const Router = express.Router();
const controller = require("../controllers/restockController");

Router.get("/", controller.getAllRestocks);
Router.get("/recent", controller.getMostRecentRestock);
Router.get("/recentover2", controller.getMostRecentRestockOver2);

module.exports = Router;
