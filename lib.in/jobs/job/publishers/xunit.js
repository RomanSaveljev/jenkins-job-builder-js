"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./xunit/thresholds.js');
var Types = require('./xunit/types.js');

var Xunit = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Xunit.prototype, 'upper');
Xunit.prototype.thresholdmode = util.generatePrimitiveAccessor('obj', 'thresholdmode');
Xunit.prototype.thresholds = util.generateCustomArrayAccessor('obj', 'thresholds', Thresholds);
Xunit.prototype.testTimeMargin = util.generatePrimitiveAccessor('obj', 'test-time-margin');
Xunit.prototype.types = util.generateCustomArrayAccessor('obj', 'types', Types);

module.exports = Xunit;
