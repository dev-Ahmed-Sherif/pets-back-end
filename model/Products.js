const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    discount: {
      type: Number,
      require: true,
    },
    productImg: {
      type: String,
      require: true,
    },
    addedDate: {
      type: String,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);
club = mongoose.model("products", clubSchema);
module.exports = club;
