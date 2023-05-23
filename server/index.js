const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");
const utils = require("./utils/utils");
const Url = require("./models/Urls");
const bodyParser = require("body-parser");
const databaseConnection = require("./db/databaseConnection");
const IndexRoute = require("./routes/index");
dotenv.config();
const app = express();
//db connection
databaseConnection();
app.use(cors());
app.use(bodyParser());
app.use(express.json());
app.use("/", IndexRoute);

// Port Listenning on 3333
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
