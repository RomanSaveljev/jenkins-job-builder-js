"use strict";

var util = require('../../../misc/util.js');

var JobLogLogger = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(JobLogLogger.prototype, 'upper');
JobLogLogger.prototype.suppressEmpty = util.generatePrimitiveArrayAccessor('obj', 'suppress-empty');

module.exports = JobLogLogger;
