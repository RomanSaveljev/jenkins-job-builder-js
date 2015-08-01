"use strict";

var util = require('../../../misc/util.js');

var ManagedScript = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ManagedScript.prototype, 'upper');
ManagedScript.prototype.scriptId = util.generatePrimitiveAccessor('obj', 'script-id');
ManagedScript.prototype.type = util.generatePrimitiveAccessor('obj', 'type');
ManagedScript.prototype.args = util.generatePrimitiveArrayAccessor('obj', 'args');

module.exports = ManagedScript;
