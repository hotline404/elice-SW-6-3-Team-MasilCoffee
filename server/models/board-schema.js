const mongoose = require("mongoose");

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["에스프레소", "논커피", "스무디", "티", "에이드"],
    },
    title: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
