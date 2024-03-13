const { Message } = require("../models");
const { sendMail } = require("../app/nodemailer");

const createMessage = async (req, res) => {
  try {
    const message = await Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const email = "admin@orangeboxalerts.com";
    const subject = "Orange Box Alerts - New Message Received";
    const messageToSend = `Name: ${req.body.name} <br/> Email: ${req.body.email} <br/> Message: ${req.body.message}`;
    sendMail(email, subject, messageToSend);
    res.json(message);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createMessage,
};
