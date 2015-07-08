"use strict";

var util = require('../util.js');

var Dynamic = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Dynamic.prototype, 'upper');
Dynamic.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Dynamic.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
Dynamic.prototype.script = util.generatePrimitiveAccessor('obj', 'script');
Dynamic.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
Dynamic.prototype.classpath = util.generatePrimitiveAccessor('obj', 'classpath');
Dynamic.prototype.readOnly = util.generatePrimitiveAccessor('obj', 'read-only');

module.exports = Dynamic;
