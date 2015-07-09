"use strict";

var util = require('../util.js');

var SonatypeClm = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SonatypeClm.prototype, 'upper');
SonatypeClm.prototype.applicationName = util.generatePrimitiveAccessor('obj', 'application-name');
SonatypeClm.prototype.failOnClmServerFailure = util.generatePrimitiveAccessor('obj', 'fail-on-clm-server-failure');
SonatypeClm.prototype.stage = util.generatePrimitiveAccessor('obj', 'stage');
SonatypeClm.prototype.scanTargets = util.generatePrimitiveAccessor('obj', 'scan-targets');
SonatypeClm.prototype.moduleExcludes = util.generatePrimitiveAccessor('obj', 'module-excludes');
SonatypeClm.prototype.advancedOptions = util.generatePrimitiveAccessor('obj', 'advanced-options');

module.exports = SonatypeClm;
