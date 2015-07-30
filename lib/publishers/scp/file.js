"use strict";

var util = require('../../util.js');

var File = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(File.prototype, 'upper');
File.prototype.target = util.generatePrimtiveAccessor('obj', 'target');
File.prototype.source = util.generatePrimtiveAccessor('obj', 'source');
File.prototype.keepHierarchy = util.generatePrimtiveAccessor('obj', 'keep-hierarchy');
File.prototype.copyAfterFailure = util.generatePrimtiveAccessor('obj', 'copy-after-failure');
File.prototype.copyConsole = util.generatePrimtiveAccessor('obj', 'copy-console');

module.exports = File;
