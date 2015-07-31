"use strict";

var util = require('../util.js');

var Bool = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
}
util.makeUppable(Bool.prototype, 'upper');
Bool.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Bool.prototype.value = util.generatePrimitiveAccessor('obj', 'value');

var BlockThresholds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
}
util.makeUppable(BlockThresholds.prototype, 'upper');
BlockThresholds.prototype.buildStepFailureThreshold = util.generatePrimitiveAccessor('obj', 'build-step-failure-threshold');
BlockThresholds.prototype.unstableThreshold = util.generatePrimitiveAccessor('obj', 'unstable-threshold');
BlockThresholds.prototype.failureThreshold = util.generatePrimitiveAccessor('obj', 'failure-threshold');

var ParameterFactories = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
}
util.makeUppable(ParameterFactories.prototype, 'upper');
ParameterFactories.prototype.factory = util.generatePrimitiveAccessor('obj', 'factory');
ParameterFactories.prototype.filePattern = util.generatePrimitiveAccessor('obj', 'file-pattern');
ParameterFactories.prototype.noFilesFoundAction = util.generatePrimitiveAccessor('obj', 'no-files-found-action');
ParameterFactories.prototype.from = util.generatePrimitiveAccessor('obj', 'from');
ParameterFactories.prototype.to = util.generatePrimitiveAccessor('obj', 'to');
ParameterFactories.prototype.step = util.generatePrimitiveAccessor('obj', 'step');
ParameterFactories.prototype.parameters = util.generatePrimitiveAccessor('obj', 'parameters');
ParameterFactories.prototype.validationFail = util.generatePrimitiveAccessor('obj', 'validation-fail');
ParameterFactories.prototype.nodeLabel = util.generatePrimitiveAccessor('obj', 'node-label');
ParameterFactories.prototype.ignoreOfflineNodes = util.generatePrimitiveAccessor('obj', 'ignore-offline-nodes');

var Project = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Project.prototype, 'upper');
Project.prototype.project = util.generatePrimitiveArrayAccessor('obj', 'project');
Project.prototype.predefinedParameters = util.generatePrimitiveAccessor('obj', 'predefined-parameters');
Project.prototype.boolParameters = util.generateObjectArrayAccessor('obj', 'bool-parameters', Bool);
Project.prototype.propertyFile = util.generatePrimitiveAccessor('obj', 'property-file');
Project.prototype.propertyFileFailOnMissing = util.generatePrimitiveAccessor('obj', 'property-file-fail-on-missing');
Project.prototype.currentParameters = util.generatePrimitiveAccessor('obj', 'current-parameters');
Project.prototype.nodeLabelName = util.generatePrimitiveAccessor('obj', 'node-label-name');
Project.prototype.nodeLabel = util.generatePrimitiveAccessor('obj', 'node-label');
Project.prototype.svnRevision = util.generatePrimitiveAccessor('obj', 'svn-revision');
Project.prototype.gitRevision = util.generatePrimitiveAccessor('obj', 'git-revision');
Project.prototype.block = util.generatePrimitiveAccessor('obj', 'block');
Project.prototype.blockThresholds = util.generateObjectAccessor('obj', 'block-thresholds', BlockThresholds);
Project.prototype.sameNode = util.generatePrimitiveAccessor('obj', 'same-node');
Project.prototype.parameterFactories = util.generateObjectArrayAccessor('obj', 'parameter-factories', ParameterFactories);

module.exports = Project;
