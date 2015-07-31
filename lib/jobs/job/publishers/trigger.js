"use strict";

var util = require('../../../misc/util.js');

var Trigger = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Trigger.prototype, 'upper');
Trigger.prototype.project = util.generatePrimitiveAccessor('obj', 'project');
Trigger.prototype.threshold = util.generatePrimitiveAccessor('obj', 'threshold');

module.exports = Trigger;
