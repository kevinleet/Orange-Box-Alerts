const db = require("../db");
const { Restock } = require("../models");

async function findProductsByName() {
  try {
    // Find all restocks
    const allRestocks = await Restock.find();

    // Filter products by name
    const productsWithName = allRestocks.flatMap((restock) =>
      restock.products.filter((product) => product.title === "Lindy mini bag")
    );

    console.log("Products with name 'Lindy mini bag':", productsWithName);
    console.log(
      "Number of products with name 'Lindy mini bag':",
      productsWithName.length
    );
  } catch (error) {
    console.error("Error finding products by name:", error);
  } finally {
    // Close the database connection
    await db.close();
  }
}

findProductsByName();
