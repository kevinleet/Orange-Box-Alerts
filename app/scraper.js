const { ZenRows } = require("zenrows");
const fs = require("fs");
const { ZENROWS_API } = require("../config");
const { Restock } = require("../models/");

const run = async () => {
  const client = new ZenRows(ZENROWS_API);
  const url =
    "https://www.hermes.com/us/en/category/women/bags-and-small-leather-goods/bags-and-clutches/";

  try {
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
    let lastRestock = await Restock.findOne().sort({ date_unix: -1 });
    if (products.length > lastRestock.quantity) {
      console.log("Restock detected!");
      const newRestock = new Restock({
        date_unix: Date.now(),
        quantity: products.length,
        products: products,
      });
      await newRestock.save();
    } else if (Date.now() - lastRestock.date_unix > 86400000) {
      console.log("Restock data is over 1 day old. Updating database...");
      const newRestock = new Restock({
        date_unix: Date.now(),
        quantity: products.length,
        products: products,
      });
      await newRestock.save();
    }
    return products;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  run,
};
