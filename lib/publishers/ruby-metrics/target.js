"use strict";

var util = require('../../util.js');

var Target = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Target.prototype, 'upper');
Target.prototype.healthy = util.generatePrimitiveAccessor('obj', 'healthy');
Target.prototype.unhealthy = util.generatePrimitiveAccessor('obj', 'unhealthy');
Target.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');

module.exports = Target;
