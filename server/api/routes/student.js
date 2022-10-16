const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is student get req",
  });
});

router.post("/", async (req, res) => {
  try {
    const student = new Student({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      phone: req.body.phone,
      email: req.body.email,
      city: req.body.city,
    });
    const result = await student.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

module.exports = router;
