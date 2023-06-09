const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PW,
  },
});

// let mailOptions = {
//   from: process.env.ZOHO_EMAIL,
//   to: "kevinli617@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

const sendMail = (recipient, subject, text) => {
  transporter.sendMail(
    {
      from: process.env.ZOHO_EMAIL,
      to: recipient,
      subject: subject,
      text: text,
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

module.exports = sendMail;
