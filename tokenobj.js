/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function TokenObject(purpose) {
  if (!(this instanceof TokenObject)) { return new TokenObject(purpose); }
  this.tokenPurpose = purpose;
  Object.freeze(this);
}

TokenObject.prototype.toString = function () {
  return '[Token: ' + String(this.tokenPurpose) + ']';
};

TokenObject.wrap = function (wraps, purpose) {
  if (!Array.isArray(wraps)) { wraps = [wraps, '']; }
  purpose = wraps.join(purpose);
  return new TokenObject(purpose);
};

TokenObject.multi = function (purposes, wrap) {
  var maker = TokenObject, tokens;
  if (wrap) { maker = maker.wrap.bind(null, wrap); }
  if (Array.isArray(purposes)) { return purposes.map(maker); }
  tokens = Object.create(null);
  Object.keys(purposes).forEach(function (name) {
    tokens[name] = maker(purposes[name]);
  });
  return tokens;
};

module.exports = TokenObject;
