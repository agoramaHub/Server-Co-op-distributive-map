const choo = require('choo')
const html = require('choo/html')
const main = require('../../view/main')

// // Beaker Bowser DatArchive API...
// const archive = new DatArchive(window.location)
var xhr = new XMLHttpRequest()
var url = 'http://localhost:3001/status'

// Initialise choo applications
const app = choo()

app.use(function(state, emitter){

  state.nodes = false

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

app.route('/', main)
app.mount('body')

// var testcall = makeRequest(url)
// setTimeout(() => {
//   console.log(testcall)
// }, 500)


function makeRequest(url) {
  console.log('bang 1!')
  xhr.open('GET', url)
  xhr.send()
  xhr.onreadystatechange = function(state) {
    if(!xhr.readyState === 4 && xhr.status === 200) {
      console.log("Something has appeared to have gone wrong.")
    } else {
      return xhr.responseText
    }
  }
}
