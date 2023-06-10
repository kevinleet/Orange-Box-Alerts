const sendMail = require("./nodemailer");
const scraper = require("./scraper");
const { Product, Alert } = require("../models");

const run = async () => {
  let interval = setInterval(async () => {
    let productsFound = await scraper.run();
    let productsToAlert = await Product.find().populate({
      path: "usersToAlert",
      model: "User",
    });
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
            let alerts = await Alert.find({ sku: sku, user: user._id });
            if (alerts.length > 0) {
              if (Date.now() - alerts[0].updatedAtUnix < 86400000) {
                console.log(
                  "User was alerted less than 24 hours ago. Will not alert again."
                );
              } else if (Date.now() - alerts[0].updatedAtUnix > 86400000) {
                console.log(
                  "User was alerted over 24 hours ago. Sending new alert."
                );
                sendMail(user.email, subject, text);
                await Alert.findByIdAndUpdate(alerts[0]._id, {
                  updatedAtUnix: Date.now(),
                });
              }
            } else {
              console.log("Sending alert email to user!");
              sendMail(user.email, subject, text);
              const newAlert = new Alert({
                sku: sku,
                user: user._id,
                updatedAtUnix: Date.now(),
              });
              await newAlert.save();
            }
          }
        }
      }
    }
  }, 30000);
};

module.exports = {
  run,
};
