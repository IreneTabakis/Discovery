'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function moduleSelection (input, s) {
  // grouping of the modules

  let groupArray = []
  let networkArray = ['device', 'network connection', 'micronet',
    'net', 'unidentified node']
  let securityArray = ['asset', 'threat', 'vulnerability', 'mechanism',
    'constraint', 'secure micronet', 'objective'
  ]
  let socialArray = ['actor', 'malicious actor']

  if (input.target.value === 'network') {
    groupArray = networkArray
  } else if (input.target.value === 'security') {
    groupArray = securityArray
  } else if (input.target.value === 'social') {
    groupArray = socialArray
  } else if (input.target.value === 'network-security') {
    groupArray = networkArray + securityArray
  } else if (input.target.value === 'network-social') {
    groupArray = networkArray + socialArray
  } else {
    groupArray = []
  }

  for (let n of s.graph.nodes().values()) {
    if (groupArray.indexOf(n.info.type) !== -1) {
      n.color = n.originalColor
    } else {
      n.color = '#424A57'
    }
  }
  s.refresh()
}