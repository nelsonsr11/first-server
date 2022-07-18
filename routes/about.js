var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.json({ about: "we are ironhack" });
});

module.exports = router;
