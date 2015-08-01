"use strict";

var util = require('../../../misc/util.js');

var Cifs = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Cifs.prototype, 'upper');
Cifs.prototype.site = util.generatePrimitiveAccessor('obj', 'site');
Cifs.prototype.target = util.generatePrimitiveAccessor('obj', 'target');
Cifs.prototype.targetIsDateFormat = util.generatePrimitiveAccessor('obj', 'target-is-date-format');
Cifs.prototype.cleanRemote = util.generatePrimitiveAccessor('obj', 'clean-remote');
Cifs.prototype.source = util.generatePrimitiveAccessor('obj', 'source');
Cifs.prototype.excludes = util.generatePrimitiveAccessor('obj', 'excludes');
Cifs.prototype.removePrefix = util.generatePrimitiveAccessor('obj', 'remove-prefix');
Cifs.prototype.failOnError = util.generatePrimitiveAccessor('obj', 'fail-on-error');
Cifs.prototype.flatten = util.generatePrimitiveAccessor('obj', 'flatten');

module.exports = Cifs;
