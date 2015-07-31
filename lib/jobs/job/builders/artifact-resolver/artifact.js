"use strict";

var util = require('../../util.js');

var Artifact = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Artifact.prototype, 'upper');
Artifact.prototype.groupId = util.generatePrimitiveAccessor('obj', 'group-id');
Artifact.prototype.artifactId = util.generatePrimitiveAccessor('obj', 'artifact-id');
Artifact.prototype.version = util.generatePrimitiveAccessor('obj', 'version');
Artifact.prototype.classifier = util.generatePrimitiveAccessor('obj', 'classifier');
Artifact.prototype.extension = util.generatePrimitiveAccessor('obj', 'extension');
Artifact.prototype.targetFileName = util.generatePrimitiveAccessor('obj', 'target-file-name');

module.exports = Artifact;
