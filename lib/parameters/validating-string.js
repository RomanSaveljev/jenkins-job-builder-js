"use strict";

var util = require('../util.js');

var ValidatingString = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ValidatingString.prototype, 'upper');
ValidatingString.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
ValidatingString.prototype.default = util.generatePrimitiveAccessor('obj', 'default');
ValidatingString.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
ValidatingString.prototype.regex = util.generatePrimitiveAccessor('obj', 'regex');
ValidatingString.prototype.msg = util.generatePrimitiveAccessor('obj', 'msg');

module.exports = ValidatingString;
