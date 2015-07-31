"use strict";

var util = require('../util.js');

var AggregateTests = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(AggregateTests.prototype, 'upper');
AggregateTests.prototype.includeFailedBuilds = util.generatePrimitiveAccessor('obj', 'include-failed-builds');

module.exports = AggregateTests;
