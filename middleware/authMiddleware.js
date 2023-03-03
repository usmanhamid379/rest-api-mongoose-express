const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  let key = "newKey";
  //   Getting the token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //   verify
      const decode = jwt.verify(token, key);
      //   get id
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch {
      res.status(401);
      throw new Error("something went wrong");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Token not found");
  }
});

module.exports = { protect };
