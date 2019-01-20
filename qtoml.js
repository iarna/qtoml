'use strict'
const TOML = require('@iarna/toml')
module.exports = function () {
  const args = Object.assign([], arguments[0].raw)
  const values = [].slice.call(arguments, 1)
  let toml = ''
  while (args.length > 0) {
    toml += args.shift()
    if (values.length > 0) toml += TOML.stringify.value(values.shift())
  }
  return TOML.parse(toml)
}
