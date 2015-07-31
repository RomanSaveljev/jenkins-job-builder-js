"use strict";

var util = require('../../util.js');
var Healthy = require('./metric-target.js');
var Unhealthy = require('./metric-target.js');
var Failing = require('./metric-target.js');

var MetricTargets = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(MetricTargets.prototype, 'upper');
MetricTargets.prototype.healthy = util.generateKeyedObjectElementAccessor('array', 'healthy', Healthy);
MetricTargets.prototype.unhealthy = util.generateKeyedObjectElementAccessor('array', 'healthy', Unhealthy);
MetricTargets.prototype.failing = util.generateKeyedObjectElementAccessor('array', 'failing', Failing);

module.exports = MetricTargets;
