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
  sendTokenAndUserId(newUser, 201, res);
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

  sendTokenAndUserId(user, 200, res);
};
module.exports = { register, login };
