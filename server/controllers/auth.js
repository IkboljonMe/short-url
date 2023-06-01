const User = require("../models/User");
const {
  validateUserInput,
  comparePassword,
  sendUser,
} = require("../utils/utils");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = await User.create({
    username,
    email,
    password,
  });
  sendUser(newUser, 200, res);
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!validateUserInput(email, password)) {
    return next(new Error("Please check your inputs"));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new Error("No user found"));
  }
  if (!comparePassword(password, user.password)) {
    return next(new Error("No correct password"));
  }
  sendUser(user, 200, res);
};

module.exports = { register, login };
