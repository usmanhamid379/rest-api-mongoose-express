const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Full Name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a Stong Passwoed"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
