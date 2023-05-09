const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
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
    number: {
      type: String,
      require: true,
    },
    personalphoto: {
      type: String,
    },
    userplaygrounds: [{ type: mongoose.Types.ObjectId, ref: "clubs" }],
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
