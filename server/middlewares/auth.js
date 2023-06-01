const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { isTokenIncluded, getAccessTokenFromHeader } = require("../utils/utils");

const getAccesToRoute = async (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  console.log("FROM MIDDLEWARE ------");
  if (!isTokenIncluded(req)) {
    console.log("FROM MIDDLEWARE -NO JWT");
    return next(new Error("No JWT"));
  }
  const accessToken = getAccessTokenFromHeader(req);
  const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
  const user = await User.findById(decoded.id);
  if (!user) {
    console.log("FROM MIDDLEWARE ------ ERRORR");
    return next(new Error("JWT EXPIRED"));
  }
  req.user = user;
  next();
};

module.exports = getAccesToRoute;
