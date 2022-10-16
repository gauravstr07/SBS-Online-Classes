const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is student get req",
  });
});

router.post("/", (req, res, next) => {
  res.send(req.body);
});

module.exports = router;
