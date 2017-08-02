const mongoose = require("mongoose")
mongoose.Promise = require('bluebird');

const MONGO_DB = "robots"
const MONGO_URL = `mongodb://localhost:27017/${MONGO_DB}`

mongoose.connect(MONGO_URL);

mongoose.connection.on("error", function handleDBErrors(err) {
  console.error("DB Error", err)
  process.exit(128)
})
