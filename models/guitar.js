//  Model

const mongoose = require('mongoose')

const guitSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  credit: String,
  linkURL: String,
  creditURL: String
})

module.exports = mongoose.model('Guitar', guitSchema)