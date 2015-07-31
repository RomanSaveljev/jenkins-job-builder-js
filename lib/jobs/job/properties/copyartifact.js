"use strict";

var util = require('../util.js');

var CopyArtifact = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CopyArtifact.prototype, 'upper');
CopyArtifact.prototype.projects = util.generatePrimitiveAccessor('obj', 'projects');

module.exports = CopyArtifact;
