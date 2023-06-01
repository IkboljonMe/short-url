const bycrpt = require("bcryptjs");

const validateUserInput = (email, password) => {
  return email && password;
};

const comparePassword = (password, hashedPassword) => {
  return bycrpt.compareSync(password, hashedPassword);
};
function validateUrl(value) {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return !!urlPattern.test(value);
}
const sendUser = (user, statusCode, res) => {
  const token = user.generateJwtFromUser();

  res.setHeader("Authorization", `Bearer ${token}`);

  res.status(statusCode).json({
    userId: user._id,
    username: user.username,
    email: user.email,
    urls: user.urls,
    token: token,
    date: user.date,
  });
};
const isTokenIncluded = (req) => {
  return (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
  );
};

const getAccessTokenFromHeader = (req) => {
  const authorization = req.headers.authorization;

  const access_token = authorization.split(" ")[1];

  return access_token;
};

module.exports = {
  validateUrl,
  validateUserInput,
  comparePassword,
  sendUser,
  isTokenIncluded,
  getAccessTokenFromHeader,
};
