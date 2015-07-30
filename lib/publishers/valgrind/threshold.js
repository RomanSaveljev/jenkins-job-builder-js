"use strict";

var util = require('../../util.js');

var Threshold = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Threshold.prototype, 'upper');
Threshold.prototype.invalidReadWrite = util.generatePrimtiveAccessor('obj', 'invalid-read-write');
Threshold.prototype.definitelyLost = util.generatePrimtiveAccessor('obj', 'definitely-lost');
Threshold.prototype.total = util.generatePrimtiveAccessor('obj', 'total');

module.exports = Threshold;