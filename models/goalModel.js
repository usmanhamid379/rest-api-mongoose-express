const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    text: {
      type: String,
      required: [true, "Please enter the text"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
