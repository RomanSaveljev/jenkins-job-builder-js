"use strict";

var util = require('../../../misc/util.js');

var BuildBlocker = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(BuildBlocker.prototype, 'upper');
BuildBlocker.prototype.useBuildBlocker = util.generatePrimitiveAccessor('obj', 'use-build-blocker');
BuildBlocker.prototype.blockingJobs = util.generatePrimitiveArrayAccessor('obj', 'blocking-jobs');

module.exports = BuildBlocker;
