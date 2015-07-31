"use strict";

var util = require('../../../misc/util.js');

var RvmEnv = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(RvmEnv.prototype, 'upper');
RvmEnv.prototype.implementation = util.generatePrimitiveAccessor('obj', 'implementation');

module.exports = RvmEnv;
