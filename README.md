# SYNOPSIS 
[![NPM Package](https://img.shields.io/npm/v/vaporyjs-tx.svg?style=flat-square)](https://www.npmjs.org/package/vaporyjs-tx)
[![Build Status](https://img.shields.io/travis/vaporyjs/vaporyjs-tx.svg?branch=master&style=flat-square)](https://travis-ci.org/vaporyjs/vaporyjs-tx)
[![Coverage Status](https://img.shields.io/coveralls/vaporyjs/vaporyjs-tx.svg?style=flat-square)](https://coveralls.io/r/vaporyjs/vaporyjs-tx)
[![Gitter](https://img.shields.io/gitter/room/vapory/vaporyjs-lib.svg?style=flat-square)](https://gitter.im/vapory/vaporyjs-lib) or #vaporyjs on freenode  

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

# INSTALL
`npm install vaporyjs-tx`

# USAGE

  - [example](https://github.com/vaporyjs/vaporyjs-tx/blob/master/examples/transactions.js)

```javascript
var Tx = require('vaporyjs-tx')
var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')

var rawTx = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000', 
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000', 
  value: '0x00', 
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

var tx = new Tx(rawTx)
tx.sign(privateKey)

var serializedTx = tx.serialize()
```

# BROWSER  
For standalone use in the browser inculde [./dist/vaporyjs-tx.js](https://github.com/vapory/vaporyjs-tx/blob/master/dist/vaporyjs-tx.js)  
This will give you a gobal varible `VapTx` to use. It will also create the globals `Buffer` and `vapUtil`  
To build for standalone use in the browser install `browserify` and run `npm run build`.

# API
[./docs/](./docs/index.md)

# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
