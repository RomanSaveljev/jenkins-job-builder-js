/*!
* job - lib/wrappers/build-name.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
* Module dependencies.
*/
var util = require('./util.js');

var BuildName = function(upper, buildName) {
  this.upper = upper;
  this.buildName = buildName;
};
util.makeUppable(Inject.prototype, 'upper');
Inject.prototype.scriptContent = util.generateNestedAccessor('buildName', 'name');

module.exports = BuildName;
