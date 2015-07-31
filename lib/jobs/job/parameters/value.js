"use strict";

var util = require('../util.js');

var Value = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Value.prototype, 'upper');
Value.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Value.prototype.default = util.generatePrimitiveAccessor('obj', 'default');
Value.prototype.description = util.generatePrimitiveAccessor('obj', 'description');

module.exports = Value;
