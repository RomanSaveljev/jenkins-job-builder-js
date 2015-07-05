/*!
 * workspace-cleanup - lib/wrappers/workspace-cleanup.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var util = require('../util.js');

var WorkspaceCleanup = function(upper, workspaceCleanup) {
  this.upper = upper;
  this.workspaceCleanup = workspaceCleanup;
};
util.makeUppable(WorkspaceCleanup.prototype, 'upper');
WorkspaceCleanup.prototype.include = util.generateArrayProxyAccessor('workspaceCleanup', 'include');
WorkspaceCleanup.prototype.exclude = util.generateArrayProxyAccessor('workspaceCleanup', 'exclude');
WorkspaceCleanup.prototype.dirmatch = util.generatePrimitiveAccessor('workspaceCleanup', 'dirmatch');


module.exports = WorkspaceCleanup;
