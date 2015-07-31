"use strict";

var util = require('../../../misc/util.js');

var Groovy = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Groovy.prototype, 'upper');
Groovy.prototype.file = util.generatePrimitiveAccessor('obj', 'file');
Groovy.prototype.command = util.generatePrimitiveAccessor('obj', 'command');
Groovy.prototype.version = util.generatePrimitiveAccessor('obj', 'version');
Groovy.prototype.parameters = util.generatePrimitiveAccessor('obj', 'parameters');
Groovy.prototype.scriptParameters = util.generatePrimitiveAccessor('obj', 'script-parameters');
Groovy.prototype.properties = util.generatePrimitiveAccessor('obj', 'properties');
Groovy.prototype.javaOpts = util.generatePrimitiveAccessor('obj', 'java-opts');
Groovy.prototype.classPath = util.generatePrimitiveAccessor('obj', 'class-path');

module.exports = Groovy;
