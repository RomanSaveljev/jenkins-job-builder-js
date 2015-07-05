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
util.makeUppable(Xvfb.prototype, 'upper');
WorkspaceCleanup.prototype.include = util.generateToDoMember('need a generic list setter interface');
WorkspaceCleanup.prototype.exclude = util.generateToDoMember('need a generic list setter interface');
WorkspaceCleanup.prototype.dirmatch = util.generateNestedAccessor('workspaceCleanup', 'dirmatch');


module.exports = WorkspaceCleanup;
