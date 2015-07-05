/*!
* job - lib/wrappers/inject.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
 * Module dependencies.
 */
var util = require('./util.js');

var Inject = function(upper, inject) {
  this.upper = upper;
  this.inject = inject;
};
util.makeUppable(Inject.prototype, 'upper');
Inject.prototype.scriptContent = util.generateNestedAccessor('inject', 'script-content');

module.exports = Inject;
