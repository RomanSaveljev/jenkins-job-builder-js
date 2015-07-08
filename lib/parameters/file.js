"use strict";

var util = require('../util.js');

var File = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(File.prototype, 'upper');
File.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
File.prototype.description = util.generatePrimitiveAccessor('obj', 'description');

module.exports = File;
