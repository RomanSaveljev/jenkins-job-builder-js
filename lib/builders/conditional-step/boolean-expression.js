"use strict";

var util = require('../util.js');

var BooleanExpression = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(BooleanExpression.prototype, 'upper');
BooleanExpression.prototype.conditionExpression = util.generatePrimitiveAccessor('obj', 'condition-expression');

module.exports = BooleanExpression;
