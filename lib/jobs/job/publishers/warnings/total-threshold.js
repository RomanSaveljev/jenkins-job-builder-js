"use strict";

var util = require('../../../../misc/util.js');

var TotalThreshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TotalThreshold.prototype, 'upper');
TotalThreshold.prototype.totalAll = util.generatePrimitiveAccessor('obj', 'total-all');
TotalThreshold.prototype.totalHigh = util.generatePrimitiveAccessor('obj', 'total-high');
TotalThreshold.prototype.totalNormal = util.generatePrimitiveAccessor('obj', 'total-normal');
TotalThreshold.prototype.totalLow = util.generatePrimitiveAccessor('obj', 'total-low');

module.exports = TotalThreshold;
