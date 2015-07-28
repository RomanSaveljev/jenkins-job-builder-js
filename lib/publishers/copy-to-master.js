"use strict";

var util = require('../util.js');

var CopyToMaster = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CopyToMaster.prototype, 'upper');
CopyToMaster.prototype.includes = util.generatePrimitiveArrayAccessor('obj', 'includes');
CopyToMaster.prototype.excludes = util.generatePrimitiveArrayAccessor('obj', 'excludes');

module.exports = CopyToMaster;
