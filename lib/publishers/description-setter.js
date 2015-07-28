"use strict";

var util = require('../util.js');

var DescriptionSetter = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(DescriptionSetter.prototype, 'upper');
DescriptionSetter.prototype.regexp = util.generatePrimitiveAccessor('obj', 'regexp');
DescriptionSetter.prototype.regexpForFailed = util.generatePrimitiveAccessor('obj', 'regexp-for-failed');
DescriptionSetter.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
DescriptionSetter.prototype.descriptionForFailed = util.generatePrimitiveAccessor('obj', 'description-for-failed');
DescriptionSetter.prototype.setForMatrix = util.generatePrimitiveAccessor('obj', 'set-for-matrix');

module.exports = DescriptionSetter;
