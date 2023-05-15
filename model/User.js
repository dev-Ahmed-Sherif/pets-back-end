const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      User: {
        type: Number,
        default: 2001,
      },
      Editor: Number,
      Admin: Number,
    },
    number: {
      type: String,
    },
    personalphoto: {
      type: String,
    },
    refreshToken: [String],
    dateRegister: {
      type: String,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);
user = mongoose.model("User", userSchema);
module.exports = user;
