const express = require("express");
const router = express.Router();

const urlRoute = require("./urlRoute");
const authRoute = require("./authRoute");

router.use("/", urlRoute);
router.use("/", authRoute);

module.exports = router;
