const { ZOHO_EMAIL, ZOHO_PW } = require("../config");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: ZOHO_EMAIL,
    pass: ZOHO_PW,
  },
});

const sendMail = (recipient, subject, text) => {
  transporter.sendMail(
    {
      from: ZOHO_EMAIL,
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
