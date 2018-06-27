'use strict'
const TOML = require('@iarna/toml')
module.exports = function () {
  const args = Object.assign([], arguments[0].raw)
  const values = [].slice.call(arguments, 1)
  let toml = ''
  while (args.length) {
    toml += args.shift()
    if (values.length) toml += TOML.stringify.value(values.shift())
  }
  return TOML.parse(toml)
}
