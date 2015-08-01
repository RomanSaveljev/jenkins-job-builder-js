"use strict";

var util = require('../../../../misc/util.js');

var Parameter = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Parameter.prototype, 'upper');
Parameter.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Parameter.prototype.value = util.generatePrimitiveAccessor('obj', 'value');

module.exports = Parameter;
