const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// initiate express server and establish which port to use... default is currently 3001.
const server = express()
const PORT = 3001

// Mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://yourlocaldb:port', {useNewUrlParser: true}, (err, db) => {
  console.log('Successful connection to DB')
  // db.close()
  // Still a question if this db.close() is needed. Seems to prevent db calls because of its position.
  // However, it would be nice to implement this connection to the db in routes.js, thus seeding it
  // a bit further within to allow for each query to open a connection and close it afterwards...
  // This is at least good practice in SQL db's - is it the same for NoSQL?
})

// use Express's middleware for locating stactic files and render distrib map view...
server.use('/', express.static('public'))

// BobyParser setup - establishes the parsing of req json for API POST and GET end points.
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Cors setup for allowing none origin services, i.e. the nodes on the map to access the POST end point.
server.use(cors())

// Initiate API routes...
routes(server)

// This will eventually be the Server Co-op Distributive Map view... to implement architecture from dex app
// (choo.js) for frontend development.
// server.get('/', (req, res) => {
//   res.send(`Server is running on port ${PORT}.`)
// })

// Tell server to listen to its own used port and console it to terminal for varification purposes.
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
