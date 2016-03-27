/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var makeTokenObj = require('tokenobj'), D = require('./lib_demo.js'),
  real = makeTokenObj('totally legit'),
  fake = makeTokenObj(real.tokenPurpose);

console.dir({ real: real, fake: fake });
// { real: TokenObject { tokenPurpose: 'totally legit' },
//   fake: TokenObject { tokenPurpose: 'totally legit' } }

D.jsonDump({ real: real, fake: fake });
// { "real": { "tokenPurpose": "totally legit" },
//   "fake": { "tokenPurpose": "totally legit" } }

D.vEqualStr.log(real, fake);
// [Token: totally legit] !== [Token: totally legit]
