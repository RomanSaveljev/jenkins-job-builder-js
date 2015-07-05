/*!
* xvfb - lib/wrappers/xvfb.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
 * Module dependencies.
 */
var util = require('../util.js');

var Xvfb = function(upper, xvfb) {
  this.upper = upper;
  this.xvfb = xvfb;
};
util.makeUppable(Xvfb.prototype, 'upper');
Xvfb.prototype.installationName = util.generateNestedAccessor('xvfb', 'installation-name');
Xvfb.prototype.autoDisplayName = util.generateNestedAccessor('xvfb', 'auto-display-name');
Xvfb.prototype.displayName = util.generateNestedAccessor('xvfb', 'display-name');
Xvfb.prototype.assignedLabels = util.generateNestedAccessor('xvfb', 'assigned-labels');
Xvfb.prototype.parallelBuild = util.generateNestedAccessor('xvfb', 'parallel-build');
Xvfb.prototype.timeout = util.generateNestedAccessor('xvfb', 'timeout');
Xvfb.prototype.screen = util.generateNestedAccessor('xvfb', 'screen');
Xvfb.prototype.displayNameOffset = util.generateNestedAccessor('xvfb', 'display-name-offset');
Xvfb.prototype.additionalOptions = util.generateNestedAccessor('xvfb', 'additional-options');
Xvfb.prototype.debug = util.generateNestedAccessor('xvfb', 'debug');
Xvfb.prototype.shutdownWithBuild = util.generateNestedAccessor('xvfb', 'shutdown-with-build');

module.exports = Xvfb;
