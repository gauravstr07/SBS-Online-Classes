const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const mongoose = require("mongoose");

// Create Student
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

// Get Student
router.get("/", async (req, res) => {
  try {
    let student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Find Studdent by Id
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// Delete Request
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Student Delete",
      result: student,
    });
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

// PUT Request
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          gender: req.body.gender,
          age: req.body.age,
          phone: req.body.phone,
          email: req.body.email,
          city: req.body.city,
        },
      }
    );
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      error: "Internal Server Error >> ",
    });
    console.log(error);
  }
});

module.exports = router;
