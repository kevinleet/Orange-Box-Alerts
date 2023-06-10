const db = require("../db");
const { Product, User, Alert } = require("../models");

const main = async () => {
  const product1 = new Product({
    name: "Space Malice Bag",
  });
  await product1.save();

  const user1 = new User({
    username: "kevblah",
    email: "kevinli617@gmail.com",
    password: "abcdefg",
  });
  await user1.save();
  product1.usersToAlert.push(user1._id);
  await product1.save();

  const alert1 = new Alert({
    sku: "H082067CKAA",
    user: user1._id,
  });

  await alert1.save();
};

const run = async () => {
  await main();
  await db.close();
};

run();
