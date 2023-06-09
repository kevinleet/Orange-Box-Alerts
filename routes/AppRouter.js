const express = require("express");
const Router = express.Router();

const ProductRouter = require("./productRouter");

Router.use("/products", ProductRouter);

module.exports = Router;
