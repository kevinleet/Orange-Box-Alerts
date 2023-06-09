const db = require("../db");
const { Product } = require("../models");

const main = async () => {
  const product1 = new Product({
    name: "Space Malice Bag",
  });

  await product1.save();
};

const run = async () => {
  await main();
  await db.close();
};

run();
