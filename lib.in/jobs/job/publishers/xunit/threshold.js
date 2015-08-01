"use strict";

var util = require('../../../../misc/util.js');

var Threshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Threshold.prototype, 'upper');
Threshold.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');
Threshold.prototype.unstablenew = util.generatePrimitiveAccessor('obj', 'unstablenew');
Threshold.prototype.failure = util.generatePrimitiveAccessor('obj', 'failure');
Threshold.prototype.failurenew = util.generatePrimitiveAccessor('obj', 'failurenew');

module.exports = Threshold;
