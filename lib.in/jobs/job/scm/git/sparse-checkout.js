"use strict";

var util = require('../../../../misc/util.js');

var SparseCheckout = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SparseCheckout.prototype, 'upper');
SparseCheckout.prototype.paths = util.generatePrimtiveArrayAccessor('obj', 'paths');

module.exports = SparseCheckout;
