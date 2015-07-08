"use strict";

var util = require('../util.js');

var MatrixCombinations = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MatrixCombinations.prototype, 'upper');
MatrixCombinations.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
MatrixCombinations.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
MatrixCombinations.prototype.filter = util.generatePrimitiveAccessor('obj', 'filter');

module.exports = MatrixCombinations;
