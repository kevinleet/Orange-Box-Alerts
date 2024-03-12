const { Restock } = require("../models");

const getAllRestocks = async (req, res) => {
  try {
    let products = await Restock.find();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
};

const getMostRecentRestock = async (req, res) => {
  try {
    let product = await Restock.findOne().sort({ date_unix: -1 });
    res.json(product);
  } catch (error) {
    res.send(error);
  }
};

// const getMostRecentRestockOver2 = async (req, res) => {
//   try {
//     let restocks = await Restock.find({ quantity: { $gt: 6 } }).sort({
//       date_unix: -1,
//     });
//     let restock = restocks.slice(0, 5);
//     res.json(restock);
//   } catch (error) {
//     res.send(error);
//   }
// };

const getMostRecentRestockOver2 = async (req, res) => {
  try {
    let restocks = await Restock.find({ quantity: { $gt: 2 }, type: "new" })
      .sort({
        date_unix: -1,
      })
      .limit(5);
    res.json(restocks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllRestocks,
  getMostRecentRestock,
  getMostRecentRestockOver2,
};
