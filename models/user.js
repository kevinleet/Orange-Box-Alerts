const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    subscription_active: { type: Boolean, required: true },
    notifyAllRestocks: { type: Boolean, required: false },
    productsToAlert: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = userSchema;
