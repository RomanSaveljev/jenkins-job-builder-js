"use strict";

var util = require('../../../misc/util.js');

var ChangeAssemblyVersion = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ChangeAssemblyVersion.prototype, 'upper');
ChangeAssemblyVersion.prototype.version = util.generatePrimitiveAccessor('obj', 'version');
ChangeAssemblyVersion.prototype.assemblyFile = util.generatePrimitiveAccessor('obj', 'assembly-file');

module.exports = ChangeAssemblyVersion;
