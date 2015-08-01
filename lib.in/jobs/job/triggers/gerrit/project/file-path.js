"use strict";

var util = require('../../../../../misc/util.js');

var FilePath = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(FilePath.prototype, 'upper');
FilePath.prototype.compareType = util.generatePrimitiveAccessor('obj', 'compare-type');
FilePath.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');

module.exports = FilePath;
