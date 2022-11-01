const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    noOfRooms: {
      type: Number,
      require: true,
    },
    fromDate: {
      type: String,
      require: true,
    },
    toDate: {
      type: String,
      require: true,
    },
    IsAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
