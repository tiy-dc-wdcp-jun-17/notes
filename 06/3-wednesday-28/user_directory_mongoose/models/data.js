const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
  address: {
    city: String,
    country: String
  },
  avatar: String,
  company: String,
  email: String,
  id: Number,
  job: String,
  name: String,
  phone: String,
  skills: [String],
  university: String,
  username: String
});

module.exports = mongoose.model("User", userSchema, "profiles");
