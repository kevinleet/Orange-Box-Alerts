const { ZenRows } = require("zenrows");
const fs = require("fs");

const scrapeData = async () => {
  const client = new ZenRows(`${process.env.ZENROWS_API}`);
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
    fs.writeFile("./data/data.json", JSON.stringify(data), (error) => {
      if (error) {
        console.log(error);
      }
      console.log(`Writing to "data.json" is complete.`);
    });
  } catch (error) {
    console.log(error);
  }
};

const readData = async () => {
  fs.readFile("./data/data.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    jsonData = JSON.parse(data);
    let products =
      jsonData[1][
        "G.json.https://bck.hermes.com/products?category=WOMENBAGSBAGSCLUTCHES&a;locale=us_en&a;pagesize=40&a;sort=relevance"
      ].body.products;
    console.log(products);
  });
};

module.exports = {
  scrapeData,
  readData,
};
