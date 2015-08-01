"use strict";

var util = require('../../../misc/util.js');

var DeliveryPipeline = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(DeliveryPipeline.prototype, 'upper');
DeliveryPipeline.prototype.stage = util.generatePrimitiveAccessor('obj', 'stage');
DeliveryPipeline.prototype.task = util.generatePrimitiveAccessor('obj', 'task');

module.exports = DeliveryPipeline;
