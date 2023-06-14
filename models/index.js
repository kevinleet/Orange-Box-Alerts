const mongoose = require("mongoose");

const productSchema = require("./product");
const userSchema = require("./user");
const alertSchema = require("./alert");
const restockSchema = require("./restock");
const messageSchema = require("./message");

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const Alert = mongoose.model("Alert", alertSchema);
const Restock = mongoose.model("Restock", restockSchema);
const Message = mongoose.model("Message", messageSchema);

module.exports = {
  Product,
  User,
  Alert,
  Restock,
  Message,
};
