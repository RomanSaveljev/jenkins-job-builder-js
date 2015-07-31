"use strict";

var util = require('../../../misc/util.js');

var Touchstone = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Touchstone.prototype, 'upper');
Touchstone.prototype.expr = util.generatePrimitiveAccessor('obj', 'expr');
Touchstone.prototype.result = util.generatePrimitiveAccessor('obj', 'result');

module.exports = Touchstone;
