const { ZenRows } = require("zenrows");
const { ZENROWS_API } = require("../config");
const { Restock, Product, Alert, User } = require("../models/");
const sendMail = require("./nodemailer");

// Function that checks for new restocks, which are defined as more products than the most recent restock in db (updated hourly)
async function restockHandler(products) {
  try {
    let lastRestock = await Restock.findOne().sort({ date_unix: -1 });
    if (products.length > lastRestock.quantity) {
      console.log("Restock detected! Emailing all subscribed users...");
      const newRestock = new Restock({
        date_unix: Date.now(),
        quantity: products.length,
        products: products,
      });
      await newRestock.save();
      emailRestockAlerts(products);
    } else if (Date.now() - lastRestock.date_unix > 3600000) {
      console.log(
        "No restock detected. Pushing current products to db/restocks."
      );
      const newRestock = new Restock({
        date_unix: Date.now(),
        quantity: products.length,
        products: products,
      });
      await newRestock.save();
    }
  } catch (error) {
    console.log(error);
  }
}

// Function that emails all users that subscribe to restock alerts
async function emailRestockAlerts(products) {
  try {
    let productsFound = [];
    for (const product of products) {
      productsFound.push(product.title);
    }
    let subject = `Orange Box Alerts - New Restock!`;
    let text = `New Restock! Products found: ${productsFound}`;
    let usersToAlert = await User.find({ notify_all_restocks: "true" });
    console.log("E");
    for (const user of usersToAlert) {
      sendMail(user.email, subject, text);
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to email users with individual product alerts
async function productAlertHandler(products) {
  try {
    let productsFound = products;
    let productsToAlert = await Product.find().populate({
      path: "usersToAlert",
      model: "User",
    });

    for (const productFound of productsFound) {
      let pf_name = productFound.title;
      let { sku, size, avgColor, assets, price, url } = productFound;
      for (const productToAlert of productsToAlert) {
        let pta_name = productToAlert.name;
        if (pf_name.toUpperCase() == pta_name.toUpperCase()) {
          let usersToAlert = productToAlert.usersToAlert;
          let subject = `Orange Box Alerts - ${pta_name} Found!`;
          let product_url = "https://www.hermes.com/us/en" + url;
          let text = `Product in Stock: ${pf_name}, ${size}, ${avgColor}, $${price}, ${product_url}`;
          for (const user of usersToAlert) {
            let alerts = await Alert.find({ sku: sku, user: user._id });
            if (alerts.length > 0) {
              if (Date.now() - alerts[0].updatedAtUnix < 86400000) {
                console.log(
                  "User was alerted less than 24 hours ago. Will not alert again."
                );
              } else if (Date.now() - alerts[0].updatedAtUnix > 86400000) {
                console.log(
                  `Sending alert to ${user.email} for ${pf_name}. (repeat alert)`
                );
                sendMail(user.email, subject, text);
                await Alert.findByIdAndUpdate(alerts[0]._id, {
                  updatedAtUnix: Date.now(),
                });
              }
            } else {
              `Sending alert to ${user.email} for ${pf_name}.`;
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
  } catch (error) {
    console.log(error);
  }
}

// Function that scrapes the hermes webstore for products on the handbags page
async function scraper() {
  try {
    const client = new ZenRows(ZENROWS_API);
    const url =
      "https://www.hermes.com/us/en/category/women/bags-and-small-leather-goods/bags-and-clutches/";
    console.log("Scraping... Scraping... Scraping...");
    const { data } = await client.get(url, {
      js_render: "true",
      antibot: "true",
      wait_for: ".product-grid-list-item",
      premium_proxy: "true",
      proxy_country: "us",
      autoparse: "true",
    });
    let products =
      data[1][
        "G.json.https://bck.hermes.com/products?category=WOMENBAGSBAGSCLUTCHES&a;locale=us_en&a;pagesize=40&a;sort=relevance"
      ].body.products;
    products = products.items.filter((item) => item.price > 2100);

    restockHandler(products);
    productAlertHandler(products);
  } catch (error) {
    console.log(error);
  }
}

// Function to run every 5 minutes.
const run = () => {
  try {
    setInterval(() => {
      scraper();
    }, 300000);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  run,
};
