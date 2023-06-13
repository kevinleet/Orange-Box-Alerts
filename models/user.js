const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    subscription_active: { type: String, required: true },
    notify_all_restocks: { type: String, required: true },
    productsToAlert: [{ type: Schema.Types.ObjectId, required: true }],
  },
  { timestamps: true }
);

module.exports = userSchema;
