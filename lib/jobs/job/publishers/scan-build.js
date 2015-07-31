"use strict";

var util = require('../util.js');

var ScanBuild = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ScanBuild.prototype, 'upper');
ScanBuild.prototype.markUnstable = util.generatePrimitiveAccessor('obj', 'mark-unstable');
ScanBuild.prototype.threshold = util.generatePrimitiveAccessor('obj', 'threshold');
ScanBuild.prototype.excludePaths = util.generatePrimitiveAccessor('obj', 'exclude-paths');

module.exports = ScanBuild;
