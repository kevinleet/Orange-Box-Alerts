const express = require("express");
const Router = require("./routes/AppRouter");
const logger = require("morgan");
const env = require("dotenv").config();
const db = require("./db");
const scraper = require("./app/scraper");
const sendMail = require("./app/nodemailer");
const alerter = require("./app/alerter");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api", Router);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "client/dist")));

// Handle all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}.`)
);

// alerter.run();
