"use strict";

var util = require('../util.js');

var Scoverage = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Scoverage.prototype, 'upper');
Scoverage.prototype.reportDirectory = util.generatePrimitiveAccessor('obj', 'report-directory');
Scoverage.prototype.reportFile = util.generatePrimitiveAccessor('obj', 'report-file');

module.exports = Scoverage;
