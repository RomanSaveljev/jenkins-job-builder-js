"use strict";

var util = require('../../../../misc/util.js');
var Threshold = require('./threshold.js');

var Thresholds = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Thresholds.prototype, 'upper');
Thresholds.prototype.failed = util.generateKeyedObjectElementAccessor('obj', 'failed', Threshold);
Thresholds.prototype.skipped = util.generateKeyedObjectElementAccessor('obj', 'skipped', Threshold);

module.exports = Thresholds;
