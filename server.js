const express = require("express");
const Router = require("./routes/AppRouter");
const logger = require("morgan");
const env = require("dotenv").config();
const db = require("./db");
const scraper = require("./app/scraper");
const sendMail = require("./app/nodemailer");
const alerter = require("./app/alerter");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api", Router);
app.use("*", express.static("client"));

alerter.run();

// const readData5000 = setInterval(() => {
//   scraper.readData();
// }, 5000);

app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}.`)
);

// Function to scrape data, write to file, read from file
// scraper.run();

// Function to send an email
// sendMail("kevinli617@gmail.com", "test subject", "test body");
