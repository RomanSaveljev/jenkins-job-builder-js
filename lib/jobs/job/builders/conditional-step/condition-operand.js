"use strict";

var util = require('../../util.js');
var allConditions = require('./all-conditions.js');

var ConditionOperand = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ConditionOperand.prototype, 'upper');
allConditions.generate(ConditionOperand.prototype, 'obj');

module.exports = ConditionOperand;
