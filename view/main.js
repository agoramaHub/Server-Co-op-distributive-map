
const html = require('choo/html')
const header = require('./components/header')
const footer = require('./components/footer')
const nodes = require('./nodes')


module.exports = function(state, emit, i) {

    var t = {
      off: 'Loading.....'
    }

    if(!state.nodes) {
      emit('get:nodes')
    }
    // check state.nodes load status. returns value false if still loading, returns a second time once
    // state.creators is loaded... Wonder if this double return is a glitch?
    // console.log(state.nodes)

    // While state.nodes is loading, load html text with obj replacement. Once loaded end while and load
    // application as per usual...
    while (!state.nodes) {
      return html `
        <body>
          <h1>${t.off}</h1>
        </body>
      `
    }

      // Loaded emit html render return
          return html `
          <body>
            ${header(state)}

            <div class="container" id="drop_zone">
                <div id="mover-container">
                  ${state.nodes.map(nodes)}
                </div>
            </div>

            ${footer(state)}
          </body>
          `




}
