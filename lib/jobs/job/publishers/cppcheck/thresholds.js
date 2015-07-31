"use strict";

var util = require('../../../../misc/util.js');
var Severity = require('./thresholds/severity.js');

var Thresholds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Thresholds.prototype, 'upper');
Thresholds.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');
Thresholds.prototype.newUnstable = util.generatePrimitiveAccessor('obj', 'new-unstable');
Thresholds.prototype.failure = util.generatePrimitiveAccessor('obj', 'failure');
Thresholds.prototype.newFailure = util.generatePrimitiveAccessor('obj', 'new-failure');
Thresholds.prototype.severity = util.generateObjectAccessor('obj', 'severity', Severity);

module.exports = Thresholds;
