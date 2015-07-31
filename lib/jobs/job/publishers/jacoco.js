"use strict";

var util = require('../../../misc/util.js');
var Targets = require('./jacoco/targets.js');

var Jacoco = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Jacoco.prototype, 'upper');
Jacoco.prototype.execPattern = util.generatePrimitiveAccessor('obj', 'exec-pattern');
Jacoco.prototype.classPattern = util.generatePrimitiveAccessor('obj', 'class-pattern');
Jacoco.prototype.sourcePattern = util.generatePrimitiveAccessor('obj', 'source-pattern');
Jacoco.prototype.updateBuildStatus = util.generatePrimitiveAccessor('obj', 'update-build-status');
Jacoco.prototype.inclusionPattern = util.generatePrimitiveAccessor('obj', 'inclusion-pattern');
Jacoco.prototype.exclusionPattern = util.generatePrimitiveAccessor('obj', 'exclusion-pattern');
Jacoco.prototype.targets = util.generateCustomArrayAccessor('obj', 'targets', Targets);

module.exports = Jacoco;
