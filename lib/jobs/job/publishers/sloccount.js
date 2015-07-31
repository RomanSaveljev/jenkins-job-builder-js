"use strict";

var util = require('../util.js');

var SlocCount = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SlocCount.prototype, 'upper');
SlocCount.prototype.reportFiles = util.generatePrimitiveAccessor('obj', 'report-files');
SlocCount.prototype.charset = util.generatePrimitiveAccessor('obj', 'charset');

module.exports = SlocCount;
