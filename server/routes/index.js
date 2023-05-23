const express = require("express");
const router = express.Router();

const urlRoute = require("./urlRoute");

router.use("/", urlRoute);

module.exports = router;
