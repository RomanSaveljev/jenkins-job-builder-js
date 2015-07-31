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
Xvfb.prototype.installationName = util.generatePrimitiveAccessor('xvfb', 'installation-name');
Xvfb.prototype.autoDisplayName = util.generatePrimitiveAccessor('xvfb', 'auto-display-name');
Xvfb.prototype.displayName = util.generatePrimitiveAccessor('xvfb', 'display-name');
Xvfb.prototype.assignedLabels = util.generatePrimitiveAccessor('xvfb', 'assigned-labels');
Xvfb.prototype.parallelBuild = util.generatePrimitiveAccessor('xvfb', 'parallel-build');
Xvfb.prototype.timeout = util.generatePrimitiveAccessor('xvfb', 'timeout');
Xvfb.prototype.screen = util.generatePrimitiveAccessor('xvfb', 'screen');
Xvfb.prototype.displayNameOffset = util.generatePrimitiveAccessor('xvfb', 'display-name-offset');
Xvfb.prototype.additionalOptions = util.generatePrimitiveAccessor('xvfb', 'additional-options');
Xvfb.prototype.debug = util.generatePrimitiveAccessor('xvfb', 'debug');
Xvfb.prototype.shutdownWithBuild = util.generatePrimitiveAccessor('xvfb', 'shutdown-with-build');

module.exports = Xvfb;
