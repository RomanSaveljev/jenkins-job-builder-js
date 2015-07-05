"use strict";

var util = require('../util.js');

var CustomTools = function(upper, customTools) {
  this.upper = upper;
  this.customTools = customTools;
};
util.makeUppable(CustomTools.prototype, 'upper');
CustomTools.prototype.tools = util.generatePrimitiveArrayProxyAccessor('customTools', 'tools');
CustomTools.prototype.skipMasterInstall = util.generatePrimitiveAccessor('customTools', 'skip-master-install');
CustomTools.prototype.convertHomesToUpper = util.generatePrimitiveAccessor('customTools', 'convert-homes-to-upper');

module.exports = CustomTools;
