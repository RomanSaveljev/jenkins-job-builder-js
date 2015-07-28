"use strict";

var util = require('../../util.js');

var Threshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Threshold.prototype, 'upper');
Threshold.prototype.totalAll = util.generatePrimtiveAccessor('obj', 'total-all');
Threshold.prototype.totalHigh = util.generatePrimtiveAccessor('obj', 'total-high');
Threshold.prototype.totalNormal = util.generatePrimtiveAccessor('obj', 'total-normal');
Threshold.prototype.totalLow = util.generatePrimtiveAccessor('obj', 'total-low');
Threshold.prototype.newAll = util.generatePrimtiveAccessor('obj', 'new-all');
Threshold.prototype.newHigh = util.generatePrimtiveAccessor('obj', 'new-high');
Threshold.prototype.newNormal = util.generatePrimtiveAccessor('obj', 'new-normal');
Threshold.prototype.newLow = util.generatePrimtiveAccessor('obj', 'new-low');

module.exports = Threshold;
