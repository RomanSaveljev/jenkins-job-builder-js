"use strict";

var util = require('../util.js');

var SBT = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SBT.prototype, 'upper');
SBT.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
SBT.prototype.jvmFlags = util.generatePrimitiveAccessor('obj', 'jvm-flags');
SBT.prototype.actions = util.generatePrimitiveAccessor('obj', 'actions');
SBT.prototype.sbtFlags = util.generatePrimitiveAccessor('obj', 'sbt-flags');
SBT.prototype.subdirPath = util.generatePrimitiveAccessor('obj', 'subdir-path');

module.exports = SBT;
