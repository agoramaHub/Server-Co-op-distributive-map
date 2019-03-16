const addnewNode = require('./nodesController')

function routes(server) {
  server.get('/status', (req, res) => {
    console.log('GET request received')
    res.send('GET request successful')
  })

  server.post('/addme', addnewNode)
}

module.exports = routes
