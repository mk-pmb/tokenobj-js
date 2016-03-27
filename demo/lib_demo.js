/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = exports;

EX.jsonify = function (x) {
  return JSON.stringify(x, null, 2
    ).replace(/\n\s*\}/g, ' }').replace(/^\{\n /, '{'
    ).replace(/\{[\n\s]*([\x00-z\|~-\uFFFF]{0,60})[\n\s]*\}/g, '{ $1}'
    );
};

EX.jsonDump = function (x) { console.log(EX.jsonify(x)); };

EX.vEqualStr = function verboseEqualityCheckWithResultAsString(apple, orange) {
  return [apple, (apple === orange ? '===' : '!=='), orange].join(' ');
};
EX.vEqualStr.log = function (apple, orange) {
  var eq = EX.vEqualStr(apple, orange);
  console.log(eq);
  return eq;
};
