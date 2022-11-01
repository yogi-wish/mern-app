const express = require("express");
const app = express();

const dbConfig = require("./db");

const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersroute");
app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// use for deployment
if (process.env.NODE_ENV == "production") {
  app.use(express.static(__dirname, "room-booking-app/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "room-booking-app/build", "index.html")
    );
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`server running by nodemon`));
