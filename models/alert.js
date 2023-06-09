const { Schema, SchemaType } = require("mongoose");

const alertSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = alertSchema;
