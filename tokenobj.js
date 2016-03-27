/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function TokenObject(purpose) {
  if (!(this instanceof TokenObject)) { return new TokenObject(purpose); }
  this.tokenPurpose = purpose;
  Object.freeze(this);
};

TokenObject.prototype.toString = function () {
  return '[Token: ' + String(this.tokenPurpose) + ']';
};

module.exports = TokenObject;
