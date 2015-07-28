"use strict";

var util = require('../../util.js');

var Tag = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Tag.prototype, 'upper');
Tag.prototype.remote = util.generatePrimtiveAccessor('obj', 'remote');
Tag.prototype.name = util.generatePrimtiveAccessor('obj', 'name');
Tag.prototype.message = util.generatePrimtiveAccessor('obj', 'message');
Tag.prototype.createTag = util.generatePrimtiveAccessor('obj', 'create-tag');
Tag.prototype.updateTag = util.generatePrimtiveAccessor('obj', 'update-tag');

module.exports = Tag;
