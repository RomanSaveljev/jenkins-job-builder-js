"use strict";

var util = require('../util.js');

var Ftp = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Ftp.prototype, 'upper');
Ftp.prototype.site = util.generatePrimitiveAccessor('obj', 'site');
Ftp.prototype.target = util.generatePrimitiveAccessor('obj', 'target');
Ftp.prototype.targetIsDateFormat = util.generatePrimitiveAccessor('obj', 'target-is-date-format');
Ftp.prototype.cleanRemote = util.generatePrimitiveAccessor('obj', 'clean-remote');
Ftp.prototype.source = util.generatePrimitiveAccessor('obj', 'source');
Ftp.prototype.excludes = util.generatePrimitiveAccessor('obj', 'excludes');
Ftp.prototype.removePrefix = util.generatePrimitiveAccessor('obj', 'remove-prefix');
Ftp.prototype.failOnError = util.generatePrimitiveAccessor('obj', 'fail-on-error');
Ftp.prototype.flatten = util.generatePrimitiveAccessor('obj', 'flatten');

module.exports = Ftp;
