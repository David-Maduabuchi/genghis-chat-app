const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("the register api is working");
});

module.exports = router;
