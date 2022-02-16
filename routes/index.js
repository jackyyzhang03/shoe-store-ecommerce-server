const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    name: "shoeStoreAPI",
    version: "v1"
  })
})

module.exports = router;