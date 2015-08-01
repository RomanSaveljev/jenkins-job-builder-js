"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./cppcheck/thresholds.js');

var CppCheck = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CppCheck.prototype, 'upper');
CppCheck.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
CppCheck.prototype.thresholds = util.generateObjectArrayAccessor('obj', 'thresholds');

module.exports = CppCheck;
