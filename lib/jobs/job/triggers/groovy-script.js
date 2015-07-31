"use strict";

var util = require('../util.js');

var GroovyScript = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(GroovyScript.prototype, 'upper');
GroovyScript.prototype.systemScript = util.generatePrimitiveAccessor('obj', 'system-script');
GroovyScript.prototype.script = util.generatePrimitiveAccessor('obj', 'script');
GroovyScript.prototype.scriptFilePath = util.generatePrimitiveAccessor('obj', 'script-file-path');
GroovyScript.prototype.propertyFilePath = util.generatePrimitiveAccessor('obj', 'property-file-path');
GroovyScript.prototype.enableConcurrent = util.generatePrimitiveAccessor('obj', 'enable-concurrent');
GroovyScript.prototype.label = util.generatePrimitiveAccessor('obj', 'label');
GroovyScript.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');

module.exports = GroovyScript;
