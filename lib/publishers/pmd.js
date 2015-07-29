"use strict";

var util = require('../util.js');
var Thresholds = require('./dry/thresholds.js');

var Pmd = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Pmd.prototype, 'upper');
Pmd.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
Pmd.prototype.canRunOnFailed = util.generatePrimitiveAccessor('obj', 'can-run-on-failed');
Pmd.prototype.shouldDetectModules = util.generatePrimitiveAccessor('obj', 'should-detect-modules');
Pmd.prototype.healthy = util.generatePrimitiveAccessor('obj', 'healthy');
Pmd.prototype.unhealthy = util.generatePrimitiveAccessor('obj', 'unhealthy');
Pmd.prototype.thresholds = util.generateObjectAccessor('obj', 'thresholds', Thresholds);
Pmd.prototype.defaultEncoding = util.generatePrimitiveAccessor('obj', 'default-encoding');
Pmd.prototype.doNotResolveRelativePaths = util.generatePrimitiveAccessor('obj', 'do-not-resolve-relative-paths');
Pmd.prototype.dontComputeNew = util.generatePrimitiveAccessor('obj', 'dont-compute-new');
Pmd.prototype.useStableBuildAsReference = util.generatePrimitiveAccessor('obj', 'use-stable-build-as-reference');
Pmd.prototype.useDeltaValues = util.generatePrimitiveAccessor('obj', 'use-delta-values');

module.exports = Pmd;
