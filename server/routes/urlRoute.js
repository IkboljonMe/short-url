const express = require("express");
const router = express.Router();
const {
  shortenUrl,
  getShortenUrlById,
  getUrls,
} = require("../controllers/url");
const getAccesToRoute = require("../middlewares/auth");

router.post("/", shortenUrl);
router.post("/urlId", getShortenUrlById);
router.post("/profile", getAccesToRoute, getUrls);

module.exports = router;
