"use strict";

var util = require('../../../../../misc/util.js');

var Severity = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Severity.prototype, 'upper');
Severity.prototype.error = util.generatePrimitiveAccessor('obj', 'error');
Severity.prototype.warning = util.generatePrimitiveAccessor('obj', 'warning');
Severity.prototype.information = util.generatePrimitiveAccessor('obj', 'information');

module.exports = Severity;
