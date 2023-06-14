const express = require("express");
const Router = express.Router();
const controller = require("../controllers/productController");

Router.get("/", controller.getAllProducts);
Router.put("/", controller.updateUsersToAlert);
Router.post("/", controller.addProduct);
Router.delete("/", controller.removeProduct);

module.exports = Router;
