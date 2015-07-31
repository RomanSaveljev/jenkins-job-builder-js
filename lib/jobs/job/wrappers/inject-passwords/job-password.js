"use strict";

var util = require('../util.js');

var JobPassword = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(JobPassword.prototype, 'upper');
JobPassword.prototype.name = util.generatePrimitiveArrayAccessor('obj', 'name');
JobPassword.prototype.password = util.generatePrimitiveArrayAccessor('obj', 'password');

module.exports = JobPassword;
