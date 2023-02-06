const mongoose = require('mongoose');
mongoose.set("strictQuery", true)
mongoose.connect(
  "mongodb+srv://nalbertjesus:83516864@api-mongo-express.dbkb47c.mongodb.net/api-nodejs-mongodb?retryWrites=true&w=majority",{}, (error) => {
  if (error) {
    console.log(error,' falaha ao autenticar com mongodb')
    return
  }
  console.log('conexão com mongodb estavel')
})

mongoose.Promise = global.Promise;

module.exports = mongoose;