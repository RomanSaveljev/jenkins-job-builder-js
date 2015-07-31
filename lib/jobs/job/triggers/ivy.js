"use strict";

var util = require('../util.js');

var Ivy = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Ivy.prototype, 'upper');
Ivy.prototype.path = util.generatePrimitiveAccessor('obj', 'path');
Ivy.prototype.settingsPath = util.generatePrimitiveAccessor('obj', 'settings-path');
Ivy.prototype.propertiesFile = util.generatePrimitiveArrayAccessor('obj', 'properties-file');
Ivy.prototype.propertiesContent = util.generatePrimitiveAccessor('obj', 'properties-content');
Ivy.prototype.debug = util.generatePrimitiveAccessor('obj', 'debug');
Ivy.prototype.downloadArtifacts = util.generatePrimitiveAccessor('obj', 'download-artifacts');
Ivy.prototype.enableConcurrent = util.generatePrimitiveAccessor('obj', 'enable-concurrent');
Ivy.prototype.label = util.generatePrimitiveAccessor('obj', 'label');
Ivy.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');

module.exports = Ivy;
