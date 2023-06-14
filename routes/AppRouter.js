const express = require("express");
const Router = express.Router();

const ProductRouter = require("./productRouter");
const AlertRouter = require("./alertRouter");
const RestockRouter = require("./restockRouter");
const UserRouter = require("./userRouter");
const MessageRouter = require("./messageRouter");

Router.use("/products", ProductRouter);
Router.use("/alerts", AlertRouter);
Router.use("/restocks", RestockRouter);
Router.use("/users", UserRouter);
Router.use("/messages", MessageRouter);

module.exports = Router;
