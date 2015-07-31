"use strict";

var util = require('../../../util.js');

var Branch = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Branch.prototype, 'upper');
Branch.prototype.branchCompareType = util.generatePrimitiveAccessor('obj', 'branch-compare-type');
Branch.prototype.branchPattern = util.generatePrimitiveAccessor('obj', 'branch-pattern');

module.exports = Branch;
