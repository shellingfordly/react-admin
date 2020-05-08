const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  create_time: {
    type: String,
    default: new Date()
  }
})

module.exports = mongoose.model('users', userSchema)