const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  ZENROWS_API: process.env.ZENROWS_API,
  APIKEY: process.env.APIKEY,
  EMAIL: process.env.EMAIL,
  EMAILPW: process.env.EMAILPW,
  ZOHO_EMAIL: process.env.ZOHO_EMAIL,
  ZOHO_PW: process.env.ZOHO_PW,
  MONGO_PW: process.env.MONGO_PW,
  PORT: process.env.PORT,
};
