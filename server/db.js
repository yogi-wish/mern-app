const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://yogi:1234@cluster0.y1uzilp.mongodb.net/booking-rooms";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

let connection = mongoose.connection;

connection.on("error", () => {
  console.log("mongoDB connection failed");
});
connection.on("connected", () => {
  console.log("mongoDB connection successful");
});

module.exports = mongoose;
