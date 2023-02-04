const expressAsyncHandler = require("express-async-handler");

// @desc    get posts
// @route   GET /api/new
// @access  private
const getGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc    set posts
// @route   POST /api/new
// @access  private
const setGoal = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter the text");
  }
  res.status(200).json({ message: "New Set Goal" });
});

// @desc    update posts
// @route   PUT /api/new
// @access  private
const updateGoal = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id} id` });
});

// @desc    delete posts
// @route   DELETE /api/new
// @access  private
const deleteGoal = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deletedddd ${req.params.id} id` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
