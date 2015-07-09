/*!
* job - lib/wrappers/inject.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
 * Module dependencies.
 */
var util = require('../util.js');

var Inject = function(upper, inject) {
  this.upper = upper;
  this.inject = inject;
};
util.makeUppable(Inject.prototype, 'upper');
Inject.prototype.scriptContent = util.generatePrimitiveAccessor('inject', 'script-content');
Inject.prototype.propertiesFile = util.generatePrimitiveAccessor('inject', 'properties-file');
Inject.prototype.propertiesContent = util.generatePrimitiveAccessor('inject', 'properties-content');
Inject.prototype.scriptFile = util.generatePrimitiveAccessor('inject', 'script-file');

module.exports = Inject;
