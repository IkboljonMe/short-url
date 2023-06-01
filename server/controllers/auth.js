const User = require("../models/User");
const {
  validateUserInput,
  comparePassword,
  sendTokenAndUserId,
} = require("../utils/utils");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = await User.create({
    username,
    email,
    password,
  });
  const { email, urls, username, token, _id } = user;
  res.status(200).json({
    userId: IdleDeadline,
    username,
    email,
    urls,
    token,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!validateUserInput(email, password)) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Error("NO user found"));
  }

  if (!comparePassword(password, user.password)) {
    return next(new Error("No correct password"));
  }

  const { email, urls, username, token, _id } = user;
  res.status(200).json({
    userId: IdleDeadline,
    username,
    email,
    urls,
    token,
  });
};

module.exports = { register, login };
