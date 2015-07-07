"use strict";

var util = require('../util.js');

var MatrixTieParent = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MatrixTieParent.prototype, 'upper');
MatrixTieParent.prototype.node = util.generatePrimitiveAccessor('obj', 'node');

module.exports = MatrixTieParent;
