"use strict";

var util = require('../../../misc/util.js');

var Junit = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Junit.prototype, 'upper');
Junit.prototype.results = util.generatePrimitiveAccessor('obj', 'results');
Junit.prototype.keepLongStdio = util.generatePrimitiveAccessor('obj', 'keep-long-stdio');
Junit.prototype.testStability = util.generatePrimitiveAccessor('obj', 'test-stability');
Junit.prototype.claimBuild = util.generatePrimitiveAccessor('obj', 'claim-build');
Junit.prototype.measurementPlots = util.generatePrimitiveAccessor('obj', 'measurement-plots');

module.exports = Junit;
