"use strict";

var util = require('../../../../misc/util.js');

var Branch = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Branch.prototype, 'upper');
Branch.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
Branch.prototype.name = util.generatePrimitiveAccessor('obj', 'name');

module.exports = Branch;
