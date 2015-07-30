"use strict";

var util = require('../../util.js');
var TotalThreshold = require('./total-threshold.js');

var TotalThresholds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TotalThresholds.prototype, 'upper');
TotalThresholds.prototype.unstable = util.generateObjectAccessor('obj', 'unstable', TotalThreshold);
TotalThresholds.prototype.failed = util.generateObjectAccessor('obj', 'failed', TotalThreshold);

module.exports = TotalThresholds;
