"use strict";

var util = require('../../../misc/util.js');

var CloneWorkspace = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CloneWorkspace.prototype, 'upper');
CloneWorkspace.prototype.workspaceGlob = util.generatePrimitiveAccessor('obj', 'workspace-glob');
CloneWorkspace.prototype.workspaceExcludeGlob = util.generatePrimitiveAccessor('obj', 'workspace-exclude-glob');
CloneWorkspace.prototype.criteria = util.generatePrimitiveAccessor('obj', 'criteria');
CloneWorkspace.prototype.archiveMethod = util.generatePrimitiveAccessor('obj', 'archive-method');
CloneWorkspace.prototype.overrideDefaultExcludes = util.generatePrimitiveAccessor('obj', 'override-default-excludes');

module.exports = CloneWorkspace;
