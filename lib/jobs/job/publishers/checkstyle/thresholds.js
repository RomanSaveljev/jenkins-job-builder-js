"use strict";

var util = require('../../util.js');
var Unstable = require('./threshold.js');
var Failed = require('./threshold.js');

var Thresholds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Thresholds.prototype, 'upper');
Thresholds.prototype.unstable = util.generateObjectAccessor('obj', 'unstable', Unstable);
Thresholds.prototype.failed = util.generateObjectAccessor('obj', 'failed', Failed);

module.exports = Thresholds;
