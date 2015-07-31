"use strict";

var util = require('../../../misc/util.js');

var LogParser = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(LogParser.prototype, 'upper');
LogParser.prototype.parseRules = util.generatePrimitiveAccessor('obj', 'parse-rules');
LogParser.prototype.unstableOnWarning = util.generatePrimitiveAccessor('obj', 'unstable-on-warning');
LogParser.prototype.failOnError = util.generatePrimitiveAccessor('obj', 'fail-on-error');

module.exports = LogParser;
