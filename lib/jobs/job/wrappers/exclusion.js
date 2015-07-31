"use strict";

var util = require('../../../misc/util.js');

var Exclusion = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Exclusion.prototype, 'upper');
Exclusion.prototype.resources = util.generatePrimitiveArrayAccessor('obj', 'resources');

module.exports = Exclusion;
