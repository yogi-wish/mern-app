const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/book", async (req, res) => {
  const newuser = new User(req.body);

  try {
    const user = await newuser.save();
    res.send("room booked successfully");
  } catch (error) {
    return res.status(404).json({ error });
  }
});

module.exports = router;
