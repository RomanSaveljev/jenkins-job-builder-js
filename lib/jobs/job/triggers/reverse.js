"use strict";

var util = require('../../../misc/util.js');

var Reverse = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Reverse.prototype, 'upper');
Reverse.prototype.jobs = util.generatePrimitiveArrayAccessor('obj', 'jobs');
Reverse.prototype.result = util.generatePrimitiveAccessor('obj', 'result');

module.exports = Reverse;
