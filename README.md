
tokenobj
========
Make self-explanatory JSON-able token objects.

Usage
-----
a.k.a. [demo/usage.js]()

```javascript
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
```



License
-------
ISC
