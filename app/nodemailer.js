const { EMAIL, EMAILPW } = require("../config");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  secure: true,
  port: 465,
  auth: {
    user: EMAIL,
    pass: EMAILPW,
  },
});

const sendMail = (recipient, subject, text) => {
  transporter.sendMail(
    {
      from: EMAIL,
      to: recipient,
      subject: subject,
      html: text,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};

const createRestockMessage = (name, products) => {
  return `<html>
  <head>
    <meta charset="utf-8">
    <title>Orange Box Alerts - New Restock!</title>
    <style>
      /* Inline CSS Styles */
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .title {
        color: #FFA500;
        font-size: 24px;
        margin-bottom: 10px;
      }
      .message {
        color: #666666;
        font-size: 16px;
        line-height: 1.5;
      }
      .cta-button {
        display: block;
        margin-top: 20px;
        text-align: center;
      }
      .cta-button a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        border-radius: 3px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1 class="title">Orange Box Alerts - New Restock!</h1>
      </div>
      <p class="message">Dear ${name},</p>
      <p class="message">The following products have been restocked: ${products}.</p>
      <div class="cta-button">
        <a href="https://www.hermes.com/us/en/category/women/bags-and-small-leather-goods/bags-and-clutches/#|">Visit Hermes Online Store</a>
      </div>
    </div>
  </body>
</html>`;
};

const createProductMessage = (name, product, color, price, url, img) => {
  return `<html>
  <head>
    <meta charset="utf-8">
    <title>Orange Box Alerts - New Restock!</title>
    <style>
      /* Inline CSS Styles */
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .title {
        color: #FFA500;
        font-size: 24px;
        margin-bottom: 10px;
      }
      .message {
        color: #666666;
        font-size: 16px;
        line-height: 1.5;
      }
      .cta-button {
        display: block;
        margin-top: 20px;
        text-align: center;
      }
      .cta-button a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        border-radius: 3px;
      }
      .image {
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1 class="title">Orange Box Alerts - ${product} Restocked!</h1>
      </div>
      <p class="message">Dear ${name},</p>
      <p class="message">The following product has been restocked: ${product}, ${color}, $${price}.</p>
      <img class="image" src=${img}/>
      <div class="cta-button">
        <a href=${url}>View Product Page</a>
      </div>
    </div>
  </body>
</html>`;
};

module.exports = {
  sendMail,
  createRestockMessage,
  createProductMessage,
};
