"use strict";

var util = require('../util.js');

var Naginator = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Naginator.prototype, 'upper');
Naginator.prototype.rerunUnstableBuilds = util.generatePrimitiveAccessor('obj', 'rerun-unstable-builds');
Naginator.prototype.fixedDelay = util.generatePrimitiveAccessor('obj', 'fixed-delay');
Naginator.prototype.progressiveDelayIncrement = util.generatePrimitiveAccessor('obj', 'progressive-delay-increment');
Naginator.prototype.progressiveDelayMaximum = util.generatePrimitiveAccessor('obj', 'progressive-delay-maximum');
Naginator.prototype.maxFailedBuilds = util.generatePrimitiveAccessor('obj', 'max-failed-builds');
Naginator.prototype.regularExpression = util.generatePrimitiveAccessor('obj', 'regular-expression');

module.exports = Naginator;
