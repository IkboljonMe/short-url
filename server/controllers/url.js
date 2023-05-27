const Url = require("../models/Urls");
const shortid = require("shortid");
const utils = require("../utils/utils");

const shortenUrl = async (req, res, next) => {
  console.log("URL HERE", req.body.url);
  const { origUrl } = req.body;
  const urlId = shortid.generate();
  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${process.env.BASE}/${urlId}`;
        const url = new Url({
          origUrl,
          shortUrl,
          urlId,
          data: Date.now(),
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
};

const getShortenUrlById = async (req, res) => {
  try {
    const { urlId } = req.body;
    const url = await Url.findOne({ urlId });
    console.log("REDIRECT URL", url);
    if (url) {
      url.clicks++;
      url.save();
      return res.status(200).json({ urlId: url.origUrl });
    } else {
      return res.status(404).json("Not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
};

module.exports = { shortenUrl, getShortenUrlById };
