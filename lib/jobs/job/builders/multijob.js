"use strict";

var util = require('../../../misc/util.js');

var Project = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
}
util.makeUppable(Multijob.prototype, 'upper');
Project.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Project.prototype.currentParameters = util.generatePrimitiveAccessor('obj', 'current-parameters');
Project.prototype.nodeLabelName = util.generatePrimitiveAccessor('obj', 'node-label-name');
Project.prototype.nodeLabel = util.generatePrimitiveAccessor('obj', 'node-label');
Project.prototype.gitRevision = util.generatePrimitiveAccessor('obj', 'git-revision');
Project.prototype.propertyFile = util.generatePrimitiveAccessor('obj', 'property-file');
Project.prototype.predefinedParameters = util.generatePrimitiveAccessor('obj', 'predefined-parameters');
Project.prototype.enableCondition = util.generatePrimitiveAccessor('obj', 'enable-condition');
Project.prototype.killPhaseOn = util.generatePrimitiveAccessor('obj', 'kill-phase-on');

var Multijob = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Multijob.prototype, 'upper');
Multijob.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Multijob.prototype.condition = util.generatePrimitiveAccessor('obj', 'condition');
Multijob.prototype.projects = util.generateObjectArrayAccessor('obj', 'projects', Project);

module.exports = Multijob;
