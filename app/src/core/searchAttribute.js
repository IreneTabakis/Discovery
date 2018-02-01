// highlights the nodes that have the search term

const bubbleTxt = require('../helpers/bubbleTxt.js')

module.exports = function flag (cy, term) {
  let searchNodes = ''

  // apply the faded class to all the elements
  cy.elements().addClass('faded')

  // check all the nodes in graph for the search terms
  cy.nodes().map(node => {
    const nodeData = node.data().asto
    Object.keys(nodeData).map(value => {
      if (nodeData[value] === term) {
        searchNodes += `• ${nodeData.description}\n`
        // remove faded class from the search nodes
        node.removeClass('faded')
      }
    })
  })
  bubbleTxt(searchNodes)
}
