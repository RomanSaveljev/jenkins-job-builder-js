"use strict";

var util = require('../../../misc/util.js');
var WorkspaceFileScanner = require('./warnings/workspace-file-scanner.js');
var TotalThresholds = require('./warnings/total-thresholds.js');
var NewThresholds = require('./warnings/new-thresholds.js');

var Warnings = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Warnings.prototype, 'upper');
Warnings.prototype.consoleLogParsers = util.generatePrimitiveArrayAccessor('obj', 'console-log-parsers');
Warnings.prototype.workspaceFileScanners = util.generateObjectArrayAccessor('obj', 'workspace-file-scanners', WorkspaceFileScanner);
Warnings.prototype.filesToInclude = util.generatePrimitiveAccessor('obj', 'files-to-include');
Warnings.prototype.filesToIgnore = util.generatePrimitiveAccessor('obj', 'files-to-ignore');
Warnings.prototype.runAlways = util.generatePrimitiveAccessor('obj', 'run-always');
Warnings.prototype.detectModules = util.generatePrimitiveAccessor('obj', 'detect-modules');
Warnings.prototype.resolveRelativePaths = util.generatePrimitiveAccessor('obj', 'resolve-relative-paths');
Warnings.prototype.healthThresholdHigh = util.generatePrimitiveAccessor('obj', 'health-threshold-high');
Warnings.prototype.healthThresholdLow = util.generatePrimitiveAccessor('obj', 'health-threshold-low');
Warnings.prototype.healthPriorities = util.generatePrimitiveAccessor('obj', 'health-priorities');
Warnings.prototype.totalThresholds = util.generateObjectAccessor('obj', 'total-thresholds', TotalThresholds);
Warnings.prototype.newThresholds = util.generateObjectAccessor('obj', 'new-thresholds', NewThresholds);
Warnings.prototype.useDeltaForNewWarnings = util.generatePrimitiveAccessor('obj', 'use-delta-for-new-warnings');
Warnings.prototype.onlyUseStableBuildsAsReference = util.generatePrimitiveAccessor('obj', 'only-use-stable-builds-as-reference');
Warnings.prototype.defaultEncoding = util.generatePrimitiveAccessor('obj', 'default-encoding');

module.exports = Warnings;
