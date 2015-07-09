"use strict";

var util = require('../util.js');

var CurrentStatus = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CurrentStatus.prototype, 'upper');
CurrentStatus.prototype.conditionWorst = util.generatePrimitiveAccessor('obj', 'condition-worst');
CurrentStatus.prototype.conditionBest = util.generatePrimitiveAccessor('obj', 'condition-best');

module.exports = CurrentStatus;
