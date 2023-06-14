const express = require("express");
const Router = express.Router();
const controller = require("../controllers/messageController");

Router.get("/", controller.getAllMessages);
Router.post("/", controller.createMessage);

module.exports = Router;
