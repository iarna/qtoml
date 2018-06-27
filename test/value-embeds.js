'use strict'
const test = require('tap').test

const toml = require('..')
const exstr = 'abc'
const exint = 23
const exfloat = 17.1
const exbool = true
const exdate = new Date()
const exarr = [ 1, 2, 3 ]
const exobj = { a: 1, b: 2, c: 3 }
const exkey = 'key'
const obj = toml`
  str = ${exstr}
  int = ${exint}
  float = ${exfloat}
  bool = ${exbool}
  date = ${exdate}
  arr = ${exarr}
  obj = ${exobj}
  ${exkey} = "value"`

test('value embeds', t => {
  t.isDeeply(obj, {
    str: exstr,
    int: exint,
    float: exfloat,
    bool: exbool,
    date: exdate,
    arr: exarr,
    obj: exobj,
    [exkey]: 'value'
  }, 'basic types')
  t.isDeeply(toml`${'"goo'} = 17`, {'"goo': 17}, 'double quotes in keys are ok')
  t.throws(() => toml`invalid = ${['a', 123]}`, 'mixed arrays throw')
  t.done()
})
