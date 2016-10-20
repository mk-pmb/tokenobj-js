
<!--#echo json="package.json" key="name" underline="=" -->
tokenobj
========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Make self-explanatory JSON-able token objects.
<!--/#echo -->


Usage
-----

<!--#include file="doc/demo/usage.js" start="//#u" stop="//#m"
  code="javascript" -->
<!--#verbatim lncnt="14" -->
```javascript
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
```
<!--/include-->

For more "how", see [doc/demo/usage.js](doc/demo/usage.js).

For more "why", see [doc/demo/userdb.demo.js](doc/demo/userdb.demo.js).



<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
