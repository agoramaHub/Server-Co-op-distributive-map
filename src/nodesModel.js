const mongoose = require('mongoose')

// Load mongoose.Schema class
const Schema = mongoose.Schema
// instantiate new class obj
const nodesSchema = new Schema({
  url: {
    type: String,
    required: 'A url is required.'
  },
  status: {
    type: Boolean,
    default: true
  },
  dateCheck: {
    type: Number,
    default: Date.now()
  },
  created_date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = nodesSchema
