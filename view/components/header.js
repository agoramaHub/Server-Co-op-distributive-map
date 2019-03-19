const html = require('choo/html')

module.exports = header

function header(state) {
  return html `
    <header>
      <h1>Agorama Server Co-op Distributive Map</h1>
      <button class="create-game" hidden>info</button>
    </header>
  `
}
