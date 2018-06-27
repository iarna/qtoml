# qtoml

Use TOML to construct object literals directly in JavaScript

```js
const toml = require('qtoml')

let obj = toml`
  [example]
  key1 = ${5 + 8}
  key2 = 17

  [elpmaxe]
  1yek = 31`

console.log(obj) // {example: {key1: 13, key2: 17}, elpmaxe: {1yek: 31}}
```

## DESCRIPTION

This module provides a tagged template string for contructing objects using TOML. 

## toml\`string\` -> Object

The provided string must be valid TOML or an error will be thrown.  Embedded
expressions are evaluted and included and can evaluate to any datatype that
can be used in TOML.  For example, the following is valid:

```js
obj = toml`a = ${new Date()}` // equivalent of {a: new Date()}
```

Only values that can be represented as TOML are allowed.  Trying to include
other values will throw.  For example, a single-type array is fine:

```js
let value = [1, 2, 3]
obj = toml`a = ${value}` // {a: [1, 2, 3]}
```

But a mixed-type array is not:

```js
let value = ['a', 'b', 1, 2]
obj = toml`a = ${value}` // throws
```
