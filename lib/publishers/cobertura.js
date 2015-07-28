"use strict";

var util = require('../util.js');
var Targets = require('./cobertura/targets.js');

var Cobertura = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Cobertura.prototype, 'upper');
Cobertura.prototype.reportFile = util.generatePrimitiveAccessor('obj', 'report-file');
Cobertura.prototype.onlyStable = util.generatePrimitiveAccessor('obj', 'only-stable');
Cobertura.prototype.failNoReports = util.generatePrimitiveAccessor('obj', 'fail-no-reports');
Cobertura.prototype.failUnhealthy = util.generatePrimitiveAccessor('obj', 'fail-unhealthy');
Cobertura.prototype.failUnstable = util.generatePrimitiveAccessor('obj', 'fail-unstable');
Cobertura.prototype.healthAutoUpdate = util.generatePrimitiveAccessor('obj', 'health-auto-update');
Cobertura.prototype.stabilityAutoUpdate = util.generatePrimitiveAccessor('obj', 'stability-auto-update');
Cobertura.prototype.zoomCoverageChart = util.generatePrimitiveAccessor('obj', 'zoom-coverage-chart');
Cobertura.prototype.sourceEncoding = util.generatePrimitiveAccessor('obj', 'source-encoding');
Cobertura.prototype.targets = util.generateCustomArrayAccessor('obj', 'targets', Targets);

module.exports = Cobertura;
