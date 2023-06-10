const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    usersToAlert: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = productSchema;
