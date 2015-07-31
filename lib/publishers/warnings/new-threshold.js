"use strict";

var util = require('../../util.js');

var NewThreshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(NewThreshold.prototype, 'upper');
NewThreshold.prototype.newAll = util.generatePrimitiveAccessor('obj', 'new-all');
NewThreshold.prototype.newHigh = util.generatePrimitiveAccessor('obj', 'new-high');
NewThreshold.prototype.newNormal = util.generatePrimitiveAccessor('obj', 'new-normal');
NewThreshold.prototype.newLow = util.generatePrimitiveAccessor('obj', 'new-low');

module.exports = NewThreshold;
