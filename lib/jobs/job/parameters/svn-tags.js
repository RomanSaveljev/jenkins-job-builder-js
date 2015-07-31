"use strict";

var util = require('../util.js');

var SvnTags = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SvnTags.prototype, 'upper');
SvnTags.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
SvnTags.prototype.default = util.generatePrimitiveAccessor('obj', 'default');
SvnTags.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
SvnTags.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
SvnTags.prototype.filter = util.generatePrimitiveAccessor('obj', 'filter');

module.exports = SvnTags;
