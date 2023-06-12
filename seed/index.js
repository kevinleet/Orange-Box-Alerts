const db = require("../db");
const { Product, User, Alert, Restock } = require("../models");

const main = async () => {
  const product1 = new Product({
    name: "Space Malice Bag",
  });
  await product1.save();

  const user1 = new User({
    username: "kevblah",
    email: "kevinli617@gmail.com",
    password: "abcdefg",
    notifyAllRestocks: true,
  });
  user1.productsToAlert.push(product1._id);
  await user1.save();
  product1.usersToAlert.push(user1._id);
  await product1.save();

  // const alert1 = new Alert({
  //   sku: "H082067CKAA",
  //   user: user1._id,
  // });

  // await alert1.save();

  const restock1 = new Restock({
    date_unix: 0,
    quantity: 0,
    products: [],
  });
  await restock1.save();
};

const run = async () => {
  await main();
  await db.close();
};

run();
