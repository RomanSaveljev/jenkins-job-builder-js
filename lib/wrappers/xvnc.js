/*!
* job - lib/wrappers/xvnc.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

/**
 * Module dependencies.
 */
var util = require('../util.js');

var Xvnc = function(upper, xvnc) {
  this.upper = upper;
  this.xvnc = xvnc;
};
util.makeUppable(Xvnc.prototype, 'upper');
Xvnc.prototype.screenshot = util.generateNestedAccessor('xvnc', 'screenshot');
Xvnc.prototype.xauthority = util.generateNestedAccessor('xvnc', 'xauthority');

module.exports = Xvnc;
