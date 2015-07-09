"use strict";

var util = require('../util.js');

var Axis = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Axis.prototype, 'upper');
Axis.prototype.type = util.generatePrimitiveAccessor('obj', 'type');
Axis.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Axis.prototype.values = util.generatePrimitiveArrayAccessor('obj', 'values');

module.exports = Axis;
