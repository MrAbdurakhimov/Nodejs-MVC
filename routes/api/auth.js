const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "This is auth page" });
});
module.exports = router;