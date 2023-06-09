const fs = require("fs");
const zenrows = require("./zenrows");
const sendMail = require("./nodemailer");
const dotenv = require("dotenv");
dotenv.config();

console.log("server.js is running...");

// Function to scrape data from Hermes web store handbag page, write to data/data.json
// zenrows.scrapeData();

// Function to read data from data/data.json
// zenrows.readData();

// Function to send an email
// sendMail("kevinli617@gmail.com", "test subject", "test body");
