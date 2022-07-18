var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.json({ number: "Out contact is 7875342341. Thanks " });
});

module.exports = router;
