const express = require("express");
const router = express.Router();
const {
  shortenUrl,
  getShortenUrlById,
  getUrls,
} = require("../controllers/url");

router.post("/", shortenUrl);
router.post("/urlId", getShortenUrlById);
router.post("/profile", getUrls);

module.exports = router;
