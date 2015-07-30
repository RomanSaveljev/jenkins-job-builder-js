"use strict";

var util = require('../../util.js');

var Threshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Threshold.prototype, 'upper');
Threshold.prototype.unstable = util.generatePrimtiveAccessor('obj', 'unstable');
Threshold.prototype.unstablenew = util.generatePrimtiveAccessor('obj', 'unstablenew');
Threshold.prototype.failure = util.generatePrimtiveAccessor('obj', 'failure');
Threshold.prototype.failurenew = util.generatePrimtiveAccessor('obj', 'failurenew');

module.exports = Threshold;
