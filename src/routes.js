const controller = require('./nodesController')

const addnewNode = controller.addnewNode
const reqNodesMap = controller.reqNodesMap

// Export module containing API end point routes.
function routes(server) {
  server.get('/status', reqNodesMap)

  server.post('/addme', addnewNode)
}

module.exports = routes
