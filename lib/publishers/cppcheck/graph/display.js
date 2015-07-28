"use strict";

var util = require('../../../util.js');

var Display = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Display.prototype, 'upper');
Display.prototype.sum = util.generatePrimitiveAccessor('obj', 'sum');
Display.prototype.error = util.generatePrimitiveAccessor('obj', 'error');

module.exports = Display;
