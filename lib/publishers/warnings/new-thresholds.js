"use strict";

var util = require('../../util.js');
var NewThreshold = require('./new-threshold.js');

var NewThresholds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(NewThresholds.prototype, 'upper');
NewThresholds.prototype.unstable = util.generateObjectAccessor('obj', 'unstable', NewThreshold);
NewThresholds.prototype.failed = util.generateObjectAccessor('obj', 'failed', NewThreshold);

module.exports = NewThresholds;
