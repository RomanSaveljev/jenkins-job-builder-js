"use strict";

var util = require('../../../misc/util.js');

var HeavyJob = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(HeavyJob.prototype, 'upper');
HeavyJob.prototype.weight = util.generatePrimitiveAccessor('obj', 'weight');

module.exports = HeavyJob;
