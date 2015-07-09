"use strict";

var util = require('../util.js');

var CopyArtifact = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CopyArtifact.prototype, 'upper');
CopyArtifact.prototype.project = util.generatePrimitiveAccessor('obj', 'project');
CopyArtifact.prototype.filter = util.generatePrimitiveAccessor('obj', 'filter');
CopyArtifact.prototype.target = util.generatePrimitiveAccessor('obj', 'target');
CopyArtifact.prototype.flatten = util.generatePrimitiveAccessor('obj', 'flatten');
CopyArtifact.prototype.optional = util.generatePrimitiveAccessor('obj', 'optional');
CopyArtifact.prototype.whichBuild = util.generatePrimitiveAccessor('obj', 'which-build');
CopyArtifact.prototype.buildNumber = util.generatePrimitiveAccessor('obj', 'build-number');
CopyArtifact.prototype.permalink = util.generatePrimitiveAccessor('obj', 'permalink');
CopyArtifact.prototype.stable = util.generatePrimitiveAccessor('obj', 'stable');
CopyArtifact.prototype.fallbackToLastSuccessful = util.generatePrimitiveAccessor('obj', 'fallback-to-last-successful');
CopyArtifact.prototype.param = util.generatePrimitiveAccessor('obj', 'param');
CopyArtifact.prototype.parameterFilters = util.generatePrimitiveAccessor('obj', 'parameter-filters');

module.exports = CopyArtifact;
