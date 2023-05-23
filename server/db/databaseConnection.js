const mongoose = require("mongoose");

const databaseConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connected"))
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports = databaseConnection;
