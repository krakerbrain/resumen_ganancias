const express = require("express");
const router = express.Router();
const {registro} = require("../controllers/controller")

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/send", registro)

module.exports = router;
