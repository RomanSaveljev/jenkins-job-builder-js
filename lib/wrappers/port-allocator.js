"use strict";

var util = require('../util.js');

var PortAllocator = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PortAllocator.prototype, 'upper');
PortAllocator.prototype.names = util.generatePrimitiveArrayAccessor('obj', 'names');

module.exports = PortAllocator;
