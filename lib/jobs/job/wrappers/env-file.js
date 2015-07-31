"use strict";

var util = require('../util.js');

var EnvFile = function(upper, envFile) {
  this.upper = upper;
  this.envFile = envFile;
};
util.makeUppable(EnvFile.prototype, 'upper');
EnvFile.prototype.propertiesFile = util.generatePrimitiveAccessor('envFile', 'properties-file');

module.exports = EnvFile;
