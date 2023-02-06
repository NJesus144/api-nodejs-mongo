require('dotenv').config()
const mongoose = require("mongoose");


mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URI, {}, (error) => {
  if (error) {
    console.log(error, " falaha ao autenticar com mongodb");
    return;
  }
  console.log("conexão com mongodb estavel");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
