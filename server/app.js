const express = require("express");
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");

const app = express();
app.use(express.json());
const port = 5000;

app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);

app.use((req, res, next) => {
  res.status(200).json({
    message: `Server running on port: ${port}📡`,
  });
});

module.exports = app;
