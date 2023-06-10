const sendMail = require("./nodemailer");
const scraper = require("./scraper");
const axios = require("axios");
const { Alert } = require("../models");

const run = async () => {
  let interval = setInterval(async () => {
    let productsFound = await scraper.run();
    let response = await axios.get("http://localhost:3001/api/products");
    let productsToAlert = response.data;
    console.log(`Scraping web store, comparing data...`);
    for (const productFound of productsFound.items) {
      let pf_title = productFound.title;
      let { sku, size, avgColor, assets, price, url } = productFound;
      for (const productToAlert of productsToAlert) {
        let pta_title = productToAlert.name;
        if (pf_title.toUpperCase() == pta_title.toUpperCase()) {
          console.log(
            `Match Found: ${pf_title}, ${sku}, ${size}, ${avgColor}, ${price}`
          );
          let usersToAlert = productToAlert.usersToAlert;
          let subject = `Hermes Alert - ${pta_title} Found`;
          let text = `Match Found: ${pf_title}, ${sku}, ${size}, ${avgColor}, ${price}`;
          for (const user of usersToAlert) {
            let response = await axios.get(
              `http://localhost:3001/api/alerts/`,
              {
                sku: sku,
                user: user._id,
              }
            );
            let data = response.data;
            if (data.length > 0) {
              console.log("User already alerted. Will not alert again.");
              return;
            } else {
              console.log("Sending alert email to user!");
              let recipient = user.email;
              sendMail(recipient, subject, text);
              const newAlert = new Alert({
                sku: sku,
                user: user._id,
              });
              await newAlert.save();
            }
          }
        }
      }
    }
  }, 5000);
};

module.exports = {
  run,
};
