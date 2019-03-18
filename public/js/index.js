const choo = require('choo')
const html = require('choo/html')
const main = require('../../view/main')

// API endpoint for retrieving node for map creation.
var url = 'http://localhost:3001/status'

// Initialise choo applications
const app = choo()

app.use(function(state, emitter){

  // Start state.node in false state. This prompts main.js (in view dir) to enact the
  // while() loop to allow for !state/nodes to convert to state.nodes. Once process is
  // done, on emitter.emit('render') passby while() and rtn true html architecture.
  state.nodes = false

  // event listener. When the event 'get:node' is emitted by the main.js (located in view dir)
  // initiate async call back function that assigns the var data the results of an awaited
  // fetch() call. Rtn res var, then assign to state.node. render to view.
  emitter.on('get:nodes', async function(){
    var data = await fetch(url).then((res) => {
      if(!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    }).then((res) => {
      console.log(res)
      return res
    })
    state.nodes = data
    emitter.emit('render')
  })

})

// in dev...
app.use(function(state, emitter){
  state.update = false

  emitter.on('update', function(){
    // state.update = true
    // emitter.emit('render', location.reload())
    console.log('New node added!')
  })

})

app.route('/', main)
app.mount('body')
