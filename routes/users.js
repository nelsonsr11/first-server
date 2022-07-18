var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", function (req, res) {
  if (!req.body.user || !req.body.password) {
    res.json({ message: "Introduce valid files" });
  } else {
    res.json({ user: req.body.user, password: req.body.password });
  }
});

router.get("/:name", function (req, res) {
  res.json({ name: req.params.name });
});

module.exports = router;
