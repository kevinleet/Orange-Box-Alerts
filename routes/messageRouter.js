const express = require("express");
const Router = express.Router();
const controller = require("../controllers/messageController");

Router.post("/", controller.createMessage);

module.exports = Router;
