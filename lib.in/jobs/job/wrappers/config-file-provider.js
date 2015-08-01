"use strict";

var util = require('../../../misc/util.js');
var ConfigFile = require('./config-file-provider/config-file.js');

var ConfigFileProvider = function(upper, configFileProvider) {
  this.upper = upper;
  this.configFileProvider = ConfigFileProvider;
};
util.makeUppable(ConfigFileProvider.prototype, 'upper');
ConfigFileProvider.prototype.files = util.generateObjectArrayAccessor('configFileProvider', 'files', ConfigFile);
