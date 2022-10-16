const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");

mongoose
  .connect("mongodb://localhost:27017/sbs-rest-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull to mongoDB😍");
  })
  .catch((err) => {
    console.log(`Something went wrong in DB 😪 --------- ${err}`);
  });

const app = express();
app.use(express.json());
const port = 5000;

// Routes
app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Page not found",
  });
});

// Calling to Server
app.use((req, res, next) => {
  res.status(200).json({
    message: `Server running on port: ${port}📡`,
  });
});

module.exports = app;
