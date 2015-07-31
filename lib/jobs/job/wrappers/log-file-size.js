"use strict";

var util = require('../util.js');

var LogFileSize = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(LogFileSize.prototype, 'upper');
LogFileSize.prototype.setOwn = util.generatePrimitiveArrayAccessor('obj', 'set-own');
LogFileSize.prototype.fail = util.generatePrimitiveArrayAccessor('obj', 'fail');
LogFileSize.prototype.size = util.generatePrimitiveArrayAccessor('obj', 'size');

module.exports = LogFileSize;
