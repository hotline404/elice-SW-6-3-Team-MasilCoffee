const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 10,
      required: true,
      trim: true, // 공백 제거
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
    },
    profile_img: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: 'User',
    },
    birth: {
      type: Date,
    },
    nickname: {
      type: String,
      maxlength: 10,
      unique: true,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    is_admin: {           // role은 User로 관리자가 승인 후 Admin으로 진화
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
