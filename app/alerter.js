const sendMail = require("./nodemailer");
const scraper = require("./scraper");
const axios = require("axios");

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
          let recipient = "kevinli617@gmail.com";
          let subject = `Hermes Alert - ${pta_title} Found`;
          let text = `Match Found: ${pf_title}, ${sku}, ${size}, ${avgColor}, ${price}`;
          // sendMail(recipient, subject, text);
        }
      }
    }
  }, 5000);
};

module.exports = {
  run,
};
