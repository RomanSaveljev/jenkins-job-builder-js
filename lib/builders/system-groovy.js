"use strict";

var util = require('../util.js');

var SystemGroovy = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SystemGroovy.prototype, 'upper');
SystemGroovy.prototype.file = util.generatePrimitiveAccessor('obj', 'file');
SystemGroovy.prototype.command = util.generatePrimitiveAccessor('obj', 'command');
SystemGroovy.prototype.bindings = util.generatePrimitiveAccessor('obj', 'bindings');
SystemGroovy.prototype.classPath = util.generatePrimitiveAccessor('obj', 'class-path');

module.exports = SystemGroovy;
