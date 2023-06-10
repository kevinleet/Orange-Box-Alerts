const { Schema, SchemaType } = require("mongoose");

const alertSchema = new Schema(
  {
    sku: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = alertSchema;
