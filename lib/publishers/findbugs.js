"use strict";

var util = require('../util.js');
var Thresholds = require('./dry/thresholds.js');

var FindBugs = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(FindBugs.prototype, 'upper');
FindBugs.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
FindBugs.prototype.rankPriority = util.generatePrimitiveAccessor('obj', 'rank-priority');
FindBugs.prototype.includeFiles = util.generatePrimitiveAccessor('obj', 'include-files');
FindBugs.prototype.excludeFiles = util.generatePrimitiveAccessor('obj', 'exclude-files');
FindBugs.prototype.canRunOnFailed = util.generatePrimitiveAccessor('obj', 'can-run-on-failed');
FindBugs.prototype.shouldDetectModules = util.generatePrimitiveAccessor('obj', 'should-detect-modules');
FindBugs.prototype.healthy = util.generatePrimitiveAccessor('obj', 'healthy');
FindBugs.prototype.unhealthy = util.generatePrimitiveAccessor('obj', 'unhealthy');
FindBugs.prototype.healthThreshold = util.generatePrimitiveAccessor('obj', 'health-threshold');
FindBugs.prototype.dontComputeNew = util.generatePrimitiveAccessor('obj', 'dont-compute-new');
FindBugs.prototype.useDeltaValues = util.generatePrimitiveAccessor('obj', 'use-delta-values');
FindBugs.prototype.usePreviousBuildAsReference = util.generatePrimitiveAccessor('obj', 'use-previous-build-as-reference');
FindBugs.prototype.useStableBuildAsReference = util.generatePrimitiveAccessor('obj', 'use-stable-build-as-reference');
FindBugs.prototype.thresholds = util.generateObjectAccessor('obj', 'thresholds', Thresholds);

module.exports = FindBugs;
