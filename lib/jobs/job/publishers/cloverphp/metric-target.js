"use strict";

var util = require('../../../../misc/util.js');

var MetricTarget = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MetricTarget.prototype, 'upper');
MetricTarget.prototype.metric = util.generatePrimitiveAccessor('obj', 'metric');
MetricTarget.prototype.statement = util.generatePrimitiveAccessor('obj', 'statement');

module.exports = MetricTarget;
