/*!
* job - lib/job.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
* Module dependencies.
*/
var util = require('./util.js');
var Inject = require('./inject.js');

var Wrappers = function(var parent, var array) {
  this.parent = parent;
  this.array = array === undefined ? [] : array;
  return this;
};

Wrappers.prototype.workspaceCleanup = util.generateStringFlagAccessor('workspace-cleanup');
Wrappers.prototype.timestamps = util.generateStringFlagAccessor('timestamps');
Wrappers.prototype.ansicolor = util.generateStringFlagAccessor('ansicolor');
Wrappers.prototype.inject = util.generateObjectFlagAccessor('inject', Inject);

module.exports = Wrappers;
