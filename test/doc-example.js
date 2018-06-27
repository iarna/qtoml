'use strict'
const test = require('tap').test

const toml = require('..')
const obj = toml`
  [example]
  key1 = 13
  key2 = 17

  [elpmaxe]
  1yek = 31`

test('doc example', t => {
  t.isDeeply(obj, {example: {key1: 13, key2: 17}, elpmaxe: {'1yek': 31}})
  t.done()
})
