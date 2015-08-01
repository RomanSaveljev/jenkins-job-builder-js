"use strict";

var util = require('../../../misc/util.js');

var CopyToSlave = function(upper, copyToSlave) {
  this.upper = upper;
  this.copyToSlave = copyToSlave;
};
util.makeUppable(CopyToSlave.prototype, 'upper');
CopyToSlave.prototype.includes = util.generatePrimitiveArrayAccessor('copyToSlave', 'includes');
CopyToSlave.prototype.excludes = util.generatePrimitiveArrayAccessor('copyToSlave', 'excludes');
CopyToSlave.prototype.flatten = util.generatePrimitiveAccessor('copyToSlave', 'flatten');
CopyToSlave.prototype.relativeTo = util.generatePrimitiveAccessor('copyToSlave', 'relative-to');
CopyToSlave.prototype.includeAntExcludes = util.generatePrimitiveAccessor('copyToSlave', 'include-ant-excludes');

module.exports = CopyToSlave;
