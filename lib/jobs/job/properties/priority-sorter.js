"use strict";

var util = require('../../../misc/util.js');

var PrioritySorter = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PrioritySorter.prototype, 'upper');
PrioritySorter.prototype.priority = util.generatePrimitiveAccessor('obj', 'priority');

module.exports = PrioritySorter;
