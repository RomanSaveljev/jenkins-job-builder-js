"use strict";

var util = require('../../../misc/util.js');

var Msbuild = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Msbuild.prototype, 'upper');
Msbuild.prototype.msbuildVersion = util.generatePrimitiveAccessor('obj', 'msbuild-version');
Msbuild.prototype.solutionFile = util.generatePrimitiveAccessor('obj', 'solution-file');
Msbuild.prototype.extraParameters = util.generatePrimitiveAccessor('obj', 'extra-parameters');
Msbuild.prototype.passBuildVariables = util.generatePrimitiveAccessor('obj', 'pass-build-variables');
Msbuild.prototype.continueOnBuildFailure = util.generatePrimitiveAccessor('obj', 'continue-on-build-failure');

module.exports = Msbuild;
