const express = require("express");
const router = express.Router();
const { shortenUrl, getShortenUrl } = require("../controllers/url");

//post endpoint
router.post("/", shortenUrl);
//redirect endpoint
router.get("/:urlId", getShortenUrl);

module.exports = router;
