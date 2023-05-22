const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");
const utils = require("./utils/utils");
const Url = require("./models/Urls");

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

//db connection

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log(err.message);
  });
//post endpoint
app.post("/", async (req, res, next) => {
  console.log("URL HERE", req.body.url);
  const { origUrl } = req.body;
  const base = `http://localhost:3333`;
  const urlId = shortid.generate();
  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;
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
});
//redirect endpoint
app.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    console.log("REDIRECT URL", url);
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else {
      return res.status(404).json("Not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

// Port Listenning on 3333
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
