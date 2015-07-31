"use strict";

var util = require('../../util.js');

var File = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(File.prototype, 'upper');
File.prototype.target = util.generatePrimitiveAccessor('obj', 'target');
File.prototype.source = util.generatePrimitiveAccessor('obj', 'source');
File.prototype.keepHierarchy = util.generatePrimitiveAccessor('obj', 'keep-hierarchy');
File.prototype.copyAfterFailure = util.generatePrimitiveAccessor('obj', 'copy-after-failure');
File.prototype.copyConsole = util.generatePrimitiveAccessor('obj', 'copy-console');

module.exports = File;
