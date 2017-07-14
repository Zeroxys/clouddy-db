'use strict'

module.exports = {
  extractName (text) {
    if (text == null) return []

    let matches = text.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/g)

    matches = matches.map(normalize)

    if (text === null) return []

    return matches
  }
}

function normalize (text) {
  text = text.toLowerCase()
  return text
}
