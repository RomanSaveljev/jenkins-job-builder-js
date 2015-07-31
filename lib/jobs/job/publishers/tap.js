"use strict";

var util = require('../util.js');

var Tap = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Tap.prototype, 'upper');
Tap.prototype.results = util.generatePrimitiveAccessor('obj', 'results');
Tap.prototype.failIfNoResults = util.generatePrimitiveAccessor('obj', 'fail-if-no-results');
Tap.prototype.failedTestsMarkBuildAsFailure = util.generatePrimitiveAccessor('obj', 'failed-tests-mark-build-as-failure');
Tap.prototype.outputTapToConsole = util.generatePrimitiveAccessor('obj', 'output-tap-to-console');
Tap.prototype.enableSubtests = util.generatePrimitiveAccessor('obj', 'enable-subtests');
Tap.prototype.discardOldReports = util.generatePrimitiveAccessor('obj', 'discard-old-reports');
Tap.prototype.todoIsFailure = util.generatePrimitiveAccessor('obj', 'todo-is-failure');

module.exports = Tap;
