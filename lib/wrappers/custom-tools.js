"use strict";

var util = require('../util.js');

var CustomTools = function(upper, customTools) {
  this.upper = upper;
  this.customTools = customTools;
};
util.makeUppable(CustomTools.prototype, 'upper');
CustomTools.prototype.tools = util.generateArrayProxyAccessor('customTools', 'tools');
CustomTools.prototype.skipMasterInstall = util.generateNestedAccessor('customTools', 'skip-master-install');
CustomTools.prototype.convertHomesToUpper = util.generateNestedAccessor('customTools', 'convert-homes-to-upper');

module.exports = CustomTools;
