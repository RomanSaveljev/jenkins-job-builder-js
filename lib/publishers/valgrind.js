"use strict";

var util = require('../util.js');
var Thresholds = require('./valgrind/thresholds.js');

var Valgrind = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Valgrind.prototype, 'upper');
Valgrind.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
Valgrind.prototype.thresholds = util.generateObjectAccessor('obj', 'thresholds', Thresholds);
Valgrind.prototype.failNoReports = util.generatePrimitiveAccessor('obj', 'fail-no-reports');
Valgrind.prototype.failInvalidReports = util.generatePrimitiveAccessor('obj', 'fail-invalid-reports');
Valgrind.prototype.publishIfAborted = util.generatePrimitiveAccessor('obj', 'publish-if-aborted');
Valgrind.prototype.publishIfFailed = util.generatePrimitiveAccessor('obj', 'publish-if-failed');

module.exports = Valgrind;
