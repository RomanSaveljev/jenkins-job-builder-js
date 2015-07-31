"use strict";

var util = require('../util.js');
var targets = require('./ruby-metrics/targets.js');

var RubyMetrics = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(RubyMetrics.prototype, 'upper');
RubyMetrics.prototype.reportDir = util.generatePrimitiveAccessor('obj', 'report-dir');
RubyMetrics.prototype.targets = util.generateCustomArrayAccessor('job', 'targets', Targets);

module.exports = RubyMetrics;
