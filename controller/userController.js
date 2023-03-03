const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

// @desc    get all users
// @route   GET /api/user
// @access  public
const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({ msg: allUsers });
});

// @desc    Register new user
// @route   POST /api/user
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(401);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      msg: user,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ msg: "something went wrong" });
  }
});

// @desc    Authenticate new user
// @route   POST /api/user/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (email === user.email && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ msg: "Logged In", token: generateToken(user._id) });
  } else {
    res.status(401);
    throw new Error("email or password doesnot match");
  }
  res.status(200).json({ msg: "Login success" });
});

// @desc    get user data
// @route   GET /api/user/me
// @access  private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(201).json({
    id: _id,
    name,
    email,
  });
});
const key = "newKey";

const generateToken = (id) => {
  return jwt.sign({ id }, key, { expiresIn: `30d` });
};

module.exports = { registerUser, loginUser, getMe, getAllUsers };
