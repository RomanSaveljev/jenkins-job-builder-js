"use strict";

var util = require('../util.js');

var CopyToSlave = function(upper, copyToSlave) {
  this.upper = upper;
  this.copyToSlave = copyToSlave;
};
util.makeUppable(CopyToSlave.prototype, 'upper');
CopyToSlave.prototype.includes = util.generatePrimitiveArrayProxyAccessor('copyToSlave', 'includes');
CopyToSlave.prototype.excludes = util.generatePrimitiveArrayProxyAccessor('copyToSlave', 'excludes');
CopyToSlave.prototype.flatten = util.generatePrimitiveAccessor('copyToSlave', 'flatten');
CopyToSlave.prototype.relativeTo = util.generatePrimitiveAccessor('copyToSlave', 'relative-to');
CopyToSlave.prototype.includeAntExcludes = util.generatePrimitiveAccessor('copyToSlave', 'include-ant-excludes');

module.exports = CopyToSlave;
