const express = require("express");
// const { get } = require("mongoose");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/apiController");

router.get("/", getGoal);
router.post("/", setGoal);
// router.route("/").get(getGoals).post(setGoal);

// router.route("/:id").put(updateGoal).delete(deleteGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
