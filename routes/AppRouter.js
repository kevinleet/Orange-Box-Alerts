const express = require("express");
const Router = express.Router();

const ProductRouter = require("./productRouter");
const AlertRouter = require("./alertRouter");
const RestockRouter = require("./restockRouter");

Router.use("/products", ProductRouter);
Router.use("/alerts", AlertRouter);
Router.use("/restocks", RestockRouter);

module.exports = Router;
