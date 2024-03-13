const db = require("../db");
const { Product } = require("../models");
const { Restock } = require("../models");

async function createProductsFromRestockTitles() {
  try {
    // Find all products
    const allProducts = await Product.find();

    // Extract unique titles from products
    const allProductTitles = allProducts.map((product) => product.name);
    const uniqueProductTitles = new Set(allProductTitles);

    // Find all restocks
    const allRestocks = await Restock.find();

    // Extract unique titles from restocks
    const allRestockTitles = allRestocks.flatMap((restock) =>
      restock.products.map((product) => product.title)
    );
    const uniqueRestockTitles = new Set(allRestockTitles);

    // Find restock titles that don't exist in product titles
    const restockTitlesNotInProducts = [...uniqueRestockTitles].filter(
      (title) => !uniqueProductTitles.has(title)
    );

    // Create new products from restock titles
    for (const title of restockTitlesNotInProducts) {
      const newProduct = new Product({ name: title });
      await newProduct.save();
      console.log(`New product created: ${title}`);
    }
  } catch (error) {
    console.error("Error creating products from restock titles:", error);
  } finally {
    // Close the database connection
    await db.close();
  }
}

createProductsFromRestockTitles();
