const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = userSchema;
