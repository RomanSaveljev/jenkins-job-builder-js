"use strict";

var util = require('../util.js');

var TestNg = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(TestNg.prototype, 'upper');
TestNg.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
TestNg.prototype.escapeTestDescription = util.generatePrimitiveAccessor('obj', 'escape-test-description');
TestNg.prototype.escapeExceptionMsg = util.generatePrimitiveAccessor('obj', 'escape-exception-msg');

module.exports = TestNg;
