const html = require('choo/html')

module.exports = function(nodes, i){
  var type = nodes.url

  // For some reason DatArchive.readdir() returns with its array an undefined item when using the opt
  // {stat: true}. To resolve this created a logic statement that filters out an undesirable objs.
  if (type !== "undefined") {
    return html `
      <a href="${type}" target="_blank"><div id="${i}" class="movable" name="${type}"></div></a>
    `
  }
}
