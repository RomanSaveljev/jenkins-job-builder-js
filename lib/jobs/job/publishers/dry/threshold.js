"use strict";

var util = require('../../util.js');

var Threshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Threshold.prototype, 'upper');
Threshold.prototype.totalAll = util.generatePrimitiveAccessor('obj', 'total-all');
Threshold.prototype.totalHigh = util.generatePrimitiveAccessor('obj', 'total-high');
Threshold.prototype.totalNormal = util.generatePrimitiveAccessor('obj', 'total-normal');
Threshold.prototype.totalLow = util.generatePrimitiveAccessor('obj', 'total-low');
Threshold.prototype.newAll = util.generatePrimitiveAccessor('obj', 'new-all');
Threshold.prototype.newHigh = util.generatePrimitiveAccessor('obj', 'new-high');
Threshold.prototype.newNormal = util.generatePrimitiveAccessor('obj', 'new-normal');
Threshold.prototype.newLow = util.generatePrimitiveAccessor('obj', 'new-low');

module.exports = Threshold;
