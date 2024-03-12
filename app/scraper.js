const { ZenRows } = require("zenrows");
const { ZENROWS_API } = require("../config");
const { Restock, Product, Alert, User } = require("../models/");
const {
  sendMail,
  createRestockMessage,
  createProductMessage,
} = require("./nodemailer");

// Function that handles the logic for determining if a restock exists
// A product restock exists when the quantity of products from the current scrape is greater than the quantity from the most recent database entry
async function restockHandler(products) {
  try {
    let lastRestock = await Restock.findOne().sort({ date_unix: -1 });
    if (products.length > lastRestock.quantity + 2) {
      // New restock, users are notified and database is updated
      console.log("Restock detected! Emailing all subscribed users...");
      const newRestock = new Restock({
        date_unix: Date.now(),
        quantity: products.length,
        products: products,
        type: "new",
      });
      await newRestock.save();
      emailRestockAlerts(products);

      // Query the Products collection to retrieve existing product names
      const existingProducts = await Product.find({}, { name: 1 });
      const existingProductNames = existingProducts.map(
        (product) => product.name
      );

      // Iterate through the products in the restock
      for (const product of products) {
        // Check if the product exists in the existing product names
        if (!existingProductNames.includes(product.title)) {
          // Create a new Product document for the product
          const newProduct = new Product({
            name: product.title,
            // Add any other necessary fields
          });
          await newProduct.save();
          console.log(`New product created: ${product.title}`);
        }
      }
    } else if (Date.now() - lastRestock.date_unix > 3600000) {
      // Even if no restock is detected, database is updated every 60 minutes to update product quantities as they decrease
      console.log(
        "No restock detected. Pushing current products to db/restocks."
      );
      const newRestock = new Restock({
        date_unix: Date.now(),
        quantity: products.length,
        products: products,
        type: "old",
      });
      await newRestock.save();
    }
  } catch (error) {
    console.error("Error handling restock:", error);
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

    let usersToAlert = await User.find({
      notify_all_restocks: "true",
      subscription_active: "true",
    });

    for (const user of usersToAlert) {
      let text = createRestockMessage(user.first_name, productsFound);
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

          for (const user of usersToAlert) {
            let img_url = assets[0].url.slice(2);
            let text = createProductMessage(
              user.first_name,
              pf_name,
              avgColor,
              price,
              product_url,
              img_url
            );
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
      wait_for: ".product-grid-list-item",
      premium_proxy: "true",
      proxy_country: "us",
      autoparse: "true",
    });
    let products =
      data[0][
        "G.json.https://bck.hermes.com/products?available_online=false&category=WOMENBAGSBAGSCLUTCHES&locale=us_en&pagesize=48&sort=relevance"
      ].body.products;
    products = products.items.filter((item) => item.price > 2100);

    restockHandler(products);
    productAlertHandler(products);
  } catch (error) {
    console.log(error);
  }
}

// Function to run scraper every 5 minutes.
const run = () => {
  try {
    // scraper();
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
