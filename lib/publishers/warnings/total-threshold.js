"use strict";

var util = require('../../util.js');

var TotalThreshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TotalThreshold.prototype, 'upper');
TotalThreshold.prototype.totalAll = util.generatePrimtiveAccessor('obj', 'total-all');
TotalThreshold.prototype.totalHigh = util.generatePrimtiveAccessor('obj', 'total-high');
TotalThreshold.prototype.totalNormal = util.generatePrimtiveAccessor('obj', 'total-normal');
TotalThreshold.prototype.totalLow = util.generatePrimtiveAccessor('obj', 'total-low');

module.exports = TotalThreshold;
