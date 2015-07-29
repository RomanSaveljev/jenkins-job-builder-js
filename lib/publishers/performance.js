"use strict";

var util = require('../util.js');
var Report = require('./performance/report.js');

var Performance = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Performance.prototype, 'upper');
Performance.prototype.failedThreshold = util.generatePrimitiveAccessor('obj', 'failed-threshold');
Performance.prototype.unstableThreshold = util.generatePrimitiveAccessor('obj', 'unstable-threshold');
Performance.prototype.report = util.generateObjectArrayAccessor('obj', 'report', Report);

module.exports = Performance;
