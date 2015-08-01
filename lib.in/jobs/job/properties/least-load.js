"use strict";

var util = require('../../../misc/util.js');

var LeastLoad = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(LeastLoad.prototype, 'upper');
LeastLoad.prototype.disabled = util.generatePrimitiveAccessor('obj', 'disabled');

module.exports = LeastLoad;
