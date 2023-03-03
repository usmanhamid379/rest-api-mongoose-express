const expressAsyncHandler = require("express-async-handler");
const { findByIdAndDelete } = require("../models/goalModel");

const Goal = require("../models/goalModel");

// @desc    get posts
// @route   GET /api/new
// @access  private
const getGoal = expressAsyncHandler(async (req, res) => {
  const goalls = await Goal.find();
  res.status(200).json({ message: goalls });
});

// @desc    set posts
// @route   POST /api/new
// @access  private
const setGoal = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter the text");
  }
  const setGoals = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json({ setGoals });
});

// @desc    update posts
// @route   PUT /api/new
// @access  private
const updateGoal = expressAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    throw new Error("Id not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    delete posts
// @route   DELETE /api/new
// @access  private
const deleteGoal = expressAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    throw new error("Id not Found");
  }
  const deletedGoal = await goal.remove();
  res.status(200).json(`${deletedGoal} deleted `);
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
