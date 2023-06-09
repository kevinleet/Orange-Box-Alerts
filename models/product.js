const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, require: true },
    usersToAlert: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = productSchema;
