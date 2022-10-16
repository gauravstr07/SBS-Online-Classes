const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is faculty get req",
  });
});

router.get("/name", (req, res, next) => {
    res.status(200).json({
      msg: "Gaurav kishor sutar",
    });
  });

router.post("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is faculty post req",
  });
});

module.exports = router;
