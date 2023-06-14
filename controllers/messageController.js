const { Message } = require("../models");
const sendMail = require("../app/nodemailer");

const createMessage = async (req, res) => {
  try {
    const message = await Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const email = "kevinli617@gmail.com";
    const subject = "Orange Box Alerts - New Message Received";
    const messageToSend = `New Messsage From: ${req.body.name}, ${req.body.email} - ${req.body.message}`;
    sendMail(email, subject, messageToSend);
    res.json(message);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createMessage,
};
