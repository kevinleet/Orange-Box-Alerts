const { Message } = require("../models");

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.send(error);
  }
};

const createMessage = async (req, res) => {
  try {
    const message = await Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    res.json(message);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllMessages,
  createMessage,
};
