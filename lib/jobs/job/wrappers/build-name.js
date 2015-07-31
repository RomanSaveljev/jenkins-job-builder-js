/*!
* build-name - lib/wrappers/build-name.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
* Module dependencies.
*/
var util = require('../../../misc/util.js');

var BuildName = function(upper, buildName) {
  this.upper = upper;
  this.buildName = buildName;
};
util.makeUppable(BuildName.prototype, 'upper');
BuildName.prototype.name = util.generatePrimitiveAccessor('buildName', 'name');

module.exports = BuildName;
