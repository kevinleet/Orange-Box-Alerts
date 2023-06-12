const { Schema } = require("mongoose");

const alertSchema = new Schema(
  {
    sku: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    updatedAtUnix: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = alertSchema;
