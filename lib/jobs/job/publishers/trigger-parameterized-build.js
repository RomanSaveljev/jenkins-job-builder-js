"use strict";

var util = require('../util.js');

var TriggerParameterizedBuild = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TriggerParameterizedBuild.prototype, 'upper');
TriggerParameterizedBuild.prototype.project = util.generatePrimitiveArrayAccessor('obj', 'project');
TriggerParameterizedBuild.prototype.predefinedParameters = util.generatePrimitiveAccessor('obj', 'predefined-parameters');
TriggerParameterizedBuild.prototype.currentParameters = util.generatePrimitiveAccessor('obj', 'current-parameters');
TriggerParameterizedBuild.prototype.nodeParameters = util.generatePrimitiveAccessor('obj', 'node-parameters');
TriggerParameterizedBuild.prototype.svnRevision = util.generatePrimitiveAccessor('obj', 'svn-revision');
TriggerParameterizedBuild.prototype.gitRevision = util.generatePrimitiveAccessor('obj', 'git-revision');
TriggerParameterizedBuild.prototype.condition = util.generatePrimitiveAccessor('obj', 'condition');
TriggerParameterizedBuild.prototype.propertyFile = util.generatePrimitiveAccessor('obj', 'property-file');
TriggerParameterizedBuild.prototype.failOnMissing = util.generatePrimitiveAccessor('obj', 'fail-on-missing');
TriggerParameterizedBuild.prototype.restrictMatrixProject = util.generatePrimitiveAccessor('obj', 'restrict-matrix-project');
TriggerParameterizedBuild.prototype.nodeLabelName = util.generatePrimitiveAccessor('obj', 'node-label-name');
TriggerParameterizedBuild.prototype.nodeLabel = util.generatePrimitiveAccessor('obj', 'node-label');

module.exports = TriggerParameterizedBuild;
