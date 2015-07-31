"use strict";

var util = require('../../../../misc/util.js');

var Target = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Target.prototype, 'upper');
Target.prototype.healthy = util.generatePrimitiveAccessor('obj', 'healthy');
Target.prototype.unhealthy = util.generatePrimitiveAccessor('obj', 'unhealthy');
Target.prototype.failing = util.generatePrimitiveAccessor('obj', 'failing');

module.exports = Target;
