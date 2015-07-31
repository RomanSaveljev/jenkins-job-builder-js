"use strict";

var util = require('../../../misc/util.js');
var Parameter = require('./dynamic-choice-scriptler/parameter.js');

var DynamicScriptler = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(DynamicScriptler.prototype, 'upper');
DynamicScriptler.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
DynamicScriptler.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
DynamicScriptler.prototype.scriptId = util.generatePrimitiveAccessor('obj', 'script-id');
DynamicScriptler.prototype.parameters = util.generateObjectArrayAccessor('obj', 'parameters', Parameter);
DynamicScriptler.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
DynamicScriptler.prototype.readOnly = util.generatePrimitiveAccessor('obj', 'read-only');

module.exports = DynamicScriptler;
