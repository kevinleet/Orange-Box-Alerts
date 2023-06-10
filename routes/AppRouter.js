const express = require("express");
const Router = express.Router();

const ProductRouter = require("./productRouter");
const AlertRouter = require("./alertRouter");

Router.use("/products", ProductRouter);
Router.use("/alerts", AlertRouter);

module.exports = Router;
