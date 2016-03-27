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

console.log('\nAn admin record as JSON:');
D.jsonDump(usersDb.getUser('Ash'));

console.log('\nAlthough the token is represented in a meaningful way,\n' +
  "JSON can't transport its real uniqueness:");
D.jsonDump(usersDb.getUser('RandomJ'));

console.log('\nBut since that limitation applies to input as well,\n' +
  "it can't be forged that way:");
realRank = usersDb.getUser('Ash').rank;
fakeRank = usersDb.getUser('RandomJ').rank;
D.vEqualStr.log(realRank, fakeRank);

console.log('\nNeither can it be forged by an evil 3rd party module:');
fakeRank = makeTokenObj(flags.admin.tokenPurpose);
D.vEqualStr.log(realRank, fakeRank);



