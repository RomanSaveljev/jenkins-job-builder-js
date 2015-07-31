"use strict";

var util = require('../../util.js');

var System = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(System.prototype, 'upper');
System.prototype.min = util.generatePrimitiveAccessor('obj', 'min');
System.prototype.max = util.generatePrimitiveAccessor('obj', 'max');
System.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');
System.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');

module.exports = System;
