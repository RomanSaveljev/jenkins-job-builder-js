"use strict";

var util = require('../../../misc/util.js');
var CleanIf = require('./workspace-cleanup/clean-if.js');

var WorkspaceCleanup = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(WorkspaceCleanup.prototype, 'upper');
WorkspaceCleanup.prototype.include = util.generatePrimitiveArrayAccessor('obj', 'include');
WorkspaceCleanup.prototype.exclude = util.generatePrimitiveArrayAccessor('obj', 'exclude');
WorkspaceCleanup.prototype.dirmatch = util.generatePrimitiveAccessor('obj', 'dirmatch');
WorkspaceCleanup.prototype.cleanIf = util.generateObjectArrayAccessor('obj', 'clean-if', CleanIf);
WorkspaceCleanup.prototype.failBuild = util.generatePrimitiveAccessor('obj', 'fail-build');
WorkspaceCleanup.prototype.cleanParent = util.generatePrimitiveAccessor('obj', 'clean-parent');

module.exports = WorkspaceCleanup;
