const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      maxlength: 200,
      minlength: 3,
      unique: true,
    },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 },
  },
  {
    timestamps: true,
  }
);
// take note of the User Casing, when creating a new model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
