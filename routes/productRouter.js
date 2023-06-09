const express = require("express");
const Router = express.Router();
const controller = require("../controllers/productController");

Router.get("/", controller.getAllProducts);

module.exports = Router;
