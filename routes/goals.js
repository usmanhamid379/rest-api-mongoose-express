const express = require("express");
const { get } = require("mongoose");
const { goals } = require("../controller/apiController");
const router = express.Router();

router.get("/", goals);

router.post("/", (req, res) => {
  res.status(200).json({ message: "post api" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Put api" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete api ${req.params.id}` });
});

module.exports = router;
