const express = require("express");
const router = express.Router();
const { shortenUrl, getShortenUrlById } = require("../controllers/url");

router.post("/", shortenUrl);
router.post("/urlId", getShortenUrlById);

module.exports = router;
