"use strict";

var util = require('../../../misc/util.js');

var Primitive = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Primitive.prototype, 'upper');
Primitive.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Primitive.prototype.value = util.generatePrimitiveAccessor('obj', 'value');
Primitive.prototype.exposeToEnv = util.generatePrimitiveAccessor('obj', 'expose-to-env');

module.exports = Primitive;
