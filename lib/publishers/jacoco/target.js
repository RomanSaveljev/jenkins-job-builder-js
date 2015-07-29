"use strict";

var util = require('../../util.js');

var Target = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Target.prototype, 'upper');
Target.prototype.healthy = util.generatePrimtiveAccessor('obj', 'healthy');
Target.prototype.unhealthy = util.generatePrimtiveAccessor('obj', 'unhealthy');

module.exports = Target;
