/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var makeTokenObj = require('tokenobj'), usersDb = require('demofake-userdb')(),
  flags = {
    admin:  makeTokenObj('User is an administrator'),
    member: makeTokenObj('User has registered'),
  },
  realRank, fakeRank, D = require('./lib_demo.js');


usersDb.hasRank = usersDb.hasPropEql.bind(usersDb, 'rank');

usersDb.addUsersFromFile('admins',  { rank: flags.admin });
usersDb.addUsersFromFile('members', { rank: flags.member });
usersDb.addUsersFromFile('guests');

console.log(String(usersDb));
  //= `[DemoFakeUserDb: 4 users: Ash, Pinky, Brain, RandomJ]`

D.annot("An admin record as JSON:");
D.jsonDump(usersDb.getUser('Ash'));
  //= `{ "nick": "Ash",`
  //= `  "icon": 42,`
  //= `  "mail": "ash@example.net",`
  //= `  "rank": { "tokenPurpose": "User is an administrator" } }`

D.annot("Although the token is represented in a meaningful way,");
D.annot("JSON can't transport its real uniqueness:");
D.jsonDump(usersDb.getUser('RandomJ'));
  //= `{ "nick": "RandomJ",`
  //= `  "icon": 23,`
  //= `  "rank": { "tokenPurpose": "User is an administrator" },`
  //= `  "mail": "random.j.hax0r@example.net" }`

D.annot("But since that limitation applies to input as well,");
D.annot("it can't be forged that way:");
realRank = usersDb.getUser('Ash').rank;
fakeRank = usersDb.getUser('RandomJ').rank;
D.vEqualStr.log(realRank, fakeRank);
  //= `[Token: User is an administrator] !== [object Object]`

D.annot("Neither can it be forged by an evil 3rd party module:");
fakeRank = makeTokenObj(flags.admin.tokenPurpose);
D.vEqualStr.log(realRank, fakeRank);
  //= `[Token: User is an administrator] !== [Token: User is an administrator]`









/*scroll*/
