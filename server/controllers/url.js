const Url = require("../models/Urls");
const shortid = require("shortid");
const utils = require("../utils/utils");
const User = require("../models/User");

const shortenUrl = async (req, res, next) => {
  const { origUrl, userId } = req.body;
  const urlId = shortid.generate();
  if (utils.validateUrl(origUrl)) {
    try {
      let user;
      if (userId) {
        user = await User.findById(userId);
        if (!user) {
          res.status(401).json("Not user found");
        }
      }
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
          user: userId,
        });
        await url.save();
        if (user) {
          user.urls.push(url._id);
          await user.save();
        }
        console.log(user);
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid  Url");
  }
};

const getShortenUrlById = async (req, res) => {
  try {
    const { urlId } = req.body;
    const url = await Url.findOne({ urlId });
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
const getUrls = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId).populate("urls");
    if (!user) {
      return res.status(401).json("Not user found");
    }
    res.status(200).json(user.urls);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

module.exports = { shortenUrl, getShortenUrlById, getUrls };
