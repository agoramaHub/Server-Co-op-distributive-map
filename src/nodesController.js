const mongoose = require('mongoose')
const nodesSchema = require('./nodesModel')

// Instantiate nodes model
const Nodes = mongoose.model('Nodes', nodesSchema)

// model function...
function addnewNode(req, res) {
  let newNode = new Nodes(req.body)
  if(!newNode) {
    res.send('Object is undefined.')
  }
  newNode.save((err, data) => {
    if (!err) {
      res.json(data)
      console.log('Entry successfully created')
    } 
  })

}

module.exports = addnewNode
