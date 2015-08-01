"use strict";

var util = require('../../../../misc/util.js');

var Tag = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Tag.prototype, 'upper');
Tag.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
Tag.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Tag.prototype.message = util.generatePrimitiveAccessor('obj', 'message');
Tag.prototype.createTag = util.generatePrimitiveAccessor('obj', 'create-tag');
Tag.prototype.updateTag = util.generatePrimitiveAccessor('obj', 'update-tag');

module.exports = Tag;
