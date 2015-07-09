"use strict";

var util = require('../util.js');

var StringsMatch = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(StringsMatch.prototype, 'upper');
StringsMatch.prototype.conditionStringOne = util.generatePrimitiveAccessor('obj', 'condition-string1');
StringsMatch.prototype.conditionStringTwo = util.generatePrimitiveAccessor('obj', 'condition-string2');
StringsMatch.prototype.conditionCaseInsensitive = util.generatePrimitiveAccessor('obj', 'condition-case-insensitive');

module.exports = StringsMatch;
