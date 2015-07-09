"use strict";

var util = require('../util.js');

var Throttle = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Throttle.prototype, 'upper');
Throttle.prototype.maxPerNode = util.generatePrimitiveAccessor('obj', 'max-per-node');
Throttle.prototype.maxTotal = util.generatePrimitiveAccessor('obj', 'max-total');
Throttle.prototype.enabled = util.generatePrimitiveAccessor('obj', 'enabled');
Throttle.prototype.option = util.generatePrimitiveAccessor('obj', 'option');
Throttle.prototype.categories = util.generatePrimitiveArrayAccessor('obj', 'categories');

module.exports = Throttle;
