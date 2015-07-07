"use strict";

var util = require('../util.js');
var JobPassword = require('./inject-passwords/job-password.js');

var InjectPasswords = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(InjectPasswords.prototype, 'upper');
InjectPasswords.prototype.global = util.generatePrimitiveAccessor('obj', 'global');
InjectPasswords.prototype.maskPasswordParams = util.generatePrimitiveAccessor('obj', 'mask-password-params');
InjectPasswords.prototype.jobPasswords = util.generateObjectArrayAccessor('obj', 'job-passwords', JobPassword);

module.exports = InjectPasswords;
