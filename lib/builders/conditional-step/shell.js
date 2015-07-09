"use strict";

var util = require('../util.js');

var Shell = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Shell.prototype, 'upper');
Shell.prototype.conditionCommand = util.generatePrimitiveAccessor('obj', 'condition-command');

module.exports = Shell;
