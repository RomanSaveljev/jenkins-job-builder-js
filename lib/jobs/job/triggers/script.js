"use strict";

var util = require('../util.js');

var Script = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Script.prototype, 'upper');
Script.prototype.label = util.generatePrimitiveAccessor('obj', 'label');
Script.prototype.script = util.generatePrimitiveAccessor('obj', 'script');
Script.prototype.scriptFilePath = util.generatePrimitiveAccessor('obj', 'script-file-path');
Script.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');
Script.prototype.enableConcurrent = util.generatePrimitiveAccessor('obj', 'enable-concurrent');
Script.prototype.exitCode = util.generatePrimitiveAccessor('obj', 'exit-code');

module.exports = Script;
