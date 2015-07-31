"use strict";

var util = require('../util.js');
var Artifact = require('./artifact-resolver/artifact.js');

var ArtifactResolver = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ArtifactResolver.prototype, 'upper');
ArtifactResolver.prototype.failOnError = util.generatePrimitiveAccessor('obj', 'fail-on-error');
ArtifactResolver.prototype.repositoryLogging = util.generatePrimitiveAccessor('obj', 'repository-logging');
ArtifactResolver.prototype.targetDirectory = util.generatePrimitiveAccessor('obj', 'target-directory');
ArtifactResolver.prototype.artifacts = util.generateObjectArrayAccessor('obj', 'artifacts', Artifact);

module.exports = ArtifactResolver;
