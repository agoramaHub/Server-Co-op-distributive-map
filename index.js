const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const server = express()
const PORT = 3001

// Mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/servermap', {useNewUrlParser: true}, (err, db) => {
  console.log('Successful connection to DB')
  // db.close()
})

// BobyParser setup
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Cors setup
server.use(cors())

routes(server)

server.get('/', (req, res) => {
  res.send(`Server is running on port ${PORT}.`)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
