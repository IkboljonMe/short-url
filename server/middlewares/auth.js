const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { isTokenIncluded, getAccessTokenFromHeader } = require("../utils/utils");

const getAccesToRoute = async (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    return next(new Error("You are not authorized to access this route "));
  }
  const accessToken = getAccessTokenFromHeader(req);
  const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new Error("You are not authorized to access this route "));
  }
  req.user = user;
  next();
};

module.exports = getAccesToRoute;
