const express = require("express");
const { register, login, getUserById } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/getUserById", getUserById);

module.exports = router;
