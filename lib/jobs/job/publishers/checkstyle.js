"use strict";

var util = require('../util.js');
var Thresholds = require('./checkstyle/thresholds.js');

var CheckStyle = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CheckStyle.prototype, 'upper');
CheckStyle.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
CheckStyle.prototype.canRunOnFailed = util.generatePrimitiveAccessor('obj', 'can-run-on-failed');
CheckStyle.prototype.shouldDetectModules = util.generatePrimitiveAccessor('obj', 'should-detect-modules');
CheckStyle.prototype.healthy = util.generatePrimitiveAccessor('obj', 'healthy');
CheckStyle.prototype.unhealthy = util.generatePrimitiveAccessor('obj', 'unhealthy');
CheckStyle.prototype.healthThreshold = util.generatePrimitiveAccessor('obj', 'health-threshold');
CheckStyle.prototype.thresholds = util.generateObjectAccessor('obj', 'thresholds', Thresholds);
CheckStyle.prototype.defaultEncoding = util.generatePrimitiveAccessor('obj', 'default-encoding');
CheckStyle.prototype.doNotResolveRelativePaths = util.generatePrimitiveAccessor('obj', 'do-not-resolve-relative-paths');
CheckStyle.prototype.dontComputeNew = util.generatePrimitiveAccessor('obj', 'dont-compute-new');
CheckStyle.prototype.useStableBuildAsReference = util.generatePrimitiveAccessor('obj', 'use-stable-build-as-reference');
CheckStyle.prototype.useDeltaValues = util.generatePrimitiveAccessor('obj', 'use-delta-values');

module.exports = CheckStyle;
