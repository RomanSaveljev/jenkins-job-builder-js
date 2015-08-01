"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./dry/thresholds.js');

var Dry = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Dry.prototype, 'upper');
Dry.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
Dry.prototype.canRunOnFailed = util.generatePrimitiveAccessor('obj', 'can-run-on-failed');
Dry.prototype.shouldDetectModules = util.generatePrimitiveAccessor('obj', 'should-detect-modules');
Dry.prototype.healthy = util.generatePrimitiveAccessor('obj', 'healthy');
Dry.prototype.unhealthy = util.generatePrimitiveAccessor('obj', 'unhealthy');
Dry.prototype.healthThreshold = util.generatePrimitiveAccessor('obj', 'health-threshold');
Dry.prototype.highThreshold = util.generatePrimitiveAccessor('obj', 'high-threshold');
Dry.prototype.normalThreshold = util.generatePrimitiveAccessor('obj', 'normal-threshold');
Dry.prototype.thresholds = util.generateObjectAccessor('obj', 'thresholds', Thresholds);
Dry.prototype.defaultEncoding = util.generatePrimitiveAccessor('obj', 'default-encoding');
Dry.prototype.doNotResolveRelativePaths = util.generatePrimitiveAccessor('obj', 'do-not-resolve-relative-paths');
Dry.prototype.dontComputeNew = util.generatePrimitiveAccessor('obj', 'dont-compute-new');
Dry.prototype.useStableBuildAsReference = util.generatePrimitiveAccessor('obj', 'use-stable-build-as-reference');
Dry.prototype.useDeltaValues = util.generatePrimitiveAccessor('obj', 'use-delta-values');

module.exports = Dry;
