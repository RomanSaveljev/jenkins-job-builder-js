"use strict";

var util = require('../util.js');

var CopyToSlave = function(upper, copyToSlave) {
  this.upper = upper;
  this.copyToSlave = copyToSlave;
};
util.makeUppable(CopyToSlave.prototype, 'upper');
CopyToSlave.prototype.includes = util.generateArrayProxyAccessor('copyToSlave', 'includes');
CopyToSlave.prototype.excludes = util.generateArrayProxyAccessor('copyToSlave', 'excludes');
CopyToSlave.prototype.flatten = util.generateNestedAccessor('copyToSlave', 'flatten');
CopyToSlave.prototype.relativeTo = util.generateNestedAccessor('copyToSlave', 'relative-to');
CopyToSlave.prototype.includeAntExcludes = util.generateNestedAccessor('copyToSlave', 'include-ant-excludes');

module.exports = CopyToSlave;
