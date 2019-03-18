const mongoose = require('mongoose')
const nodesSchema = require('./nodesModel')
const events = require('events')

// Instantiate nodes model, which was imported (or required) through the nodesModel
// which contains the boilerplate schema.
const Nodes = mongoose.model('Nodes', nodesSchema)

// set var as update update emitter...
const update = new events.EventEmitter()

// POST API function. This function assigns a new Nodes obj with the server req for db insertion.
// Currently, Nodes recieves req.body from API call. Once vetted it saves
// the new entry into the db and returns res with json inputed into the db.
function addnewNode(req, res) {
  let newNode = new Nodes(req.body)

  newNode.save((err, data) => {
    if (err) {
      res.send(err)
    }
    res.json(data)
    console.log('Entry successfully created')
    update.emit('update')
  })
}

// GET end point function. This function is a basic GET req which search the db for all
// nodes with a status of true. If this param is true return in json res.
function reqNodesMap(req, res) {
  Nodes.find({"status": true}, (err, data) => {
    if(err) {
      res.send(err)
    }
    res.json(data)
  })
}

module.exports = {
    addnewNode,
    reqNodesMap
}
