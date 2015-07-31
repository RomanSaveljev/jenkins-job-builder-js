"use strict";

var util = require('../../util.js');

var Pundle = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Pundle.prototype, 'upper');
Pundle.prototype.package = util.generatePrimitiveAccessor('obj', 'package');
Pundle.prototype.bundle = util.generatePrimitiveAccessor('obj', 'bundle');

module.exports = Pundle;
