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
    // console.log(products);
    const newRestock = new Restock({
      date_unix: Date.now(),
      quantity: products.items.length,
      products: products.items,
    });
    await newRestock.save();
    return products;
  } catch (error) {
    console.log(error);
  }
};

// const run = async () => {
//   // await scrapeData();
//   let products = await readData();
//   return products;
// };

// const scrapeData = async () => {
//   const client = new ZenRows(ZENROWS_API);
//   const url =
//     "https://www.hermes.com/us/en/category/women/bags-and-small-leather-goods/bags-and-clutches/";

//   try {
//     const { data } = await client.get(url, {
//       js_render: "true",
//       antibot: "true",
//       wait_for: ".product-grid-list-item",
//       premium_proxy: "true",
//       proxy_country: "us",
//       autoparse: "true",
//     });

//     await new Promise((resolve, reject) => {
//       fs.writeFile("./app/data/data.json", JSON.stringify(data), (error) => {
//         if (error) {
//           console.log(error);
//           reject(error);
//         } else {
//           console.log(`Writing to "data.json" is complete.`);
//           resolve();
//         }
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const readData = async () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile("./app/data/data.json", "utf8", (error, data) => {
//       if (error) {
//         console.log(error);
//       }
//       console.log(`Reading from "data.json" is complete.`);
//       jsonData = JSON.parse(data);
//       let products =
//         jsonData[1][
//           "G.json.https://bck.hermes.com/products?category=WOMENBAGSBAGSCLUTCHES&a;locale=us_en&a;pagesize=40&a;sort=relevance"
//         ].body.products;
//       resolve(products);
//     });
//   });
// };

module.exports = {
  run,
};
