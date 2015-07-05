"use strict";

var util = require('../../util.js');

var ConfigFile = function(upper, configFile) {
  this.upper = upper;
  this.configFile = configFile;
};
util.makeUppable(ConfigFile.prototype, 'upper');
ConfigFile.prototype.fileId = util.generatePrimitiveAccessor('configFile', 'file-id');
ConfigFile.prototype.target = util.generatePrimitiveAccessor('configFile', 'target');
ConfigFile.prototype.variable = util.generatePrimitiveAccessor('configFile', 'variable');

module.exports = ConfigFile;
