"use strict";

var util = require('../util.js');

var FileExists = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(FileExists.prototype, 'upper');
FileExists.prototype.conditionFilename = util.generatePrimitiveAccessor('obj', 'condition-filename');
FileExists.prototype.conditionBasedir = util.generatePrimitiveAccessor('obj', 'condition-basedir');

module.exports = FileExists;
