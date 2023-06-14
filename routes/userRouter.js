const express = require("express");
const Router = express.Router();
const controller = require("../controllers/userController");

Router.get("/", controller.getAllUsers);
Router.post("/", controller.createUser);
Router.put("/1", controller.updateAllRestocks);
Router.put("/2", controller.updateProductAlerts);
Router.put("/3", controller.updateUserSubscription);

module.exports = Router;
