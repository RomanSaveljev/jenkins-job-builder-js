"use strict";

var util = require('../../util.js');

var NewThreshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(NewThreshold.prototype, 'upper');
NewThreshold.prototype.newAll = util.generatePrimtiveAccessor('obj', 'new-all');
NewThreshold.prototype.newHigh = util.generatePrimtiveAccessor('obj', 'new-high');
NewThreshold.prototype.newNormal = util.generatePrimtiveAccessor('obj', 'new-normal');
NewThreshold.prototype.newLow = util.generatePrimtiveAccessor('obj', 'new-low');

module.exports = NewThreshold;
