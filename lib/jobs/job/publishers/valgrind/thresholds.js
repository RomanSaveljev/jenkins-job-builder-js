"use strict";

var util = require('../../../../misc/util.js');
var Threshold = require('./threshold.js');

var Thresholds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Thresholds.prototype, 'upper');
Thresholds.prototype.unstable = util.generateObjectAccessor('obj', 'unstable', Threshold);
Thresholds.prototype.failed = util.generateObjectAccessor('obj', 'failed', Threshold);

module.exports = Thresholds;
