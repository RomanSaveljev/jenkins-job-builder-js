"use strict";

var util = require('../util.js');

var DeliveryPipeline = function(upper, deliveryPipeline) {
  this.upper = upper;
  this.deliveryPipeline = deliveryPipeline;
};
util.makeUppable(DeliveryPipeline.prototype, 'upper');
DeliveryPipeline.prototype.versionTemplate = util.generatePrimitiveAccessor('deliveryPipeline', 'version-template');
DeliveryPipeline.prototype.setDisplayName = util.generatePrimitiveAccessor('deliveryPipeline', 'set-display-name');

module.exports = DeliveryPipeline;
