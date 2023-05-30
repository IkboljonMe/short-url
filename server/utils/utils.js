const bycrpt = require("bcryptjs");

const validateUserInput = (email, password) => {
  return email && password;
};

const comparePassword = (password, hashedPassword) => {
  return bycrpt.compareSync(password, hashedPassword);
};
function validateUrl(value) {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return !!urlPattern.test(value);
}
const sendTokenAndUserId = (user, statusCode, res) => {
  const token = user.generateJwtFromUser();
  const userId = user._id;
  res.setHeader("Authorization", `Bearer ${token}`);

  return res.status(statusCode).json({
    success: true,
    token,
    userId,
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
  sendTokenAndUserId,
  isTokenIncluded,
  getAccessTokenFromHeader,
};
