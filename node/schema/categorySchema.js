const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  categoryId: String,
  categoryName: String,
  create_time: {
    type: String,
    default: new Date()
  }
})

module.exports = mongoose.model('categorys', categorySchema)