"use strict";

var util = require('../../util.js');

var Branch = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Branch.prototype, 'upper');
Branch.prototype.remote = util.generatePrimtiveAccessor('obj', 'remote');
Branch.prototype.name = util.generatePrimtiveAccessor('obj', 'name');

module.exports = Branch;
