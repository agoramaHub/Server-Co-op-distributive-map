const mongoose = require('mongoose')

// Load mongoose.Schema class. This allows for the creation of a custom db document for
// inserting into MongoDB
const Schema = mongoose.Schema

// instantiate new class obj. Class obj corresponds to db schema, or boilerplate.
// below is the structure of data to be used for keeping track of the Distributive
// Map's nodes.
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
