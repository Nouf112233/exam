const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URI, options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connected");
  });
