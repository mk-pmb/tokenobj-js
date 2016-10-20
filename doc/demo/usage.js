/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

//#u
var tokenObj = require('tokenobj'), D = require('./lib_demo.js'),
  real = tokenObj('totally legit'),
  fake = tokenObj(real.tokenPurpose),
  tkn;

console.dir({ real: real, fake: fake });
//= `{ real: TokenObject { tokenPurpose: 'totally legit' },`
//= `  fake: TokenObject { tokenPurpose: 'totally legit' } }`

D.jsonDump({ real: real, fake: fake });
//= `{ "real": { "tokenPurpose": "totally legit" },`
//= `  "fake": { "tokenPurpose": "totally legit" } }`
//#m

D.vEqualStr.log(real, fake);
//= `[Token: totally legit] !== [Token: totally legit]`

tkn = tokenObj.wrap(['Created in ', ' weather'], D.checkWeather());
console.dir(tkn);
//= `TokenObject { tokenPurpose: 'Created in rainy weather' }`

tkn = D.weathers.map(tokenObj.wrap.bind(null, ['Created in ', ' weather']));
console.dir(tkn);
//= `[ TokenObject { tokenPurpose: 'Created in rainy weather' },`
//= `  TokenObject { tokenPurpose: 'Created in sunny weather' },`
//= `  TokenObject { tokenPurpose: 'Created in stormy weather' },`
//= `  TokenObject { tokenPurpose: 'Created in snowy weather' } ]`

tkn = tokenObj.multi(D.weathers, ['Created in ', ' weather']);
console.dir(tkn);
// same as above
//= `[ TokenObject { tokenPurpose: 'Created in rainy weather' },`
//= `  TokenObject { tokenPurpose: 'Created in sunny weather' },`
//= `  TokenObject { tokenPurpose: 'Created in stormy weather' },`
//= `  TokenObject { tokenPurpose: 'Created in snowy weather' } ]`

tkn = tokenObj.multi({
  woof: "I'm a dog",
  mooo: "I'm a cow",
  roar: "I'm a lion!",
});
D.jsonDump(tkn);
//= `{ "woof": { "tokenPurpose": "I'm a dog" },`
//= `  "mooo": { "tokenPurpose": "I'm a cow" },`
//= `  "roar": { "tokenPurpose": "I'm a lion!" } }`










/*scroll*/
