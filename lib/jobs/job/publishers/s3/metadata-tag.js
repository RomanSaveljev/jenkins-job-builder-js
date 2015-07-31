"use strict";

var util = require('../../../../misc/util.js');

var MetadataTag = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MetadataTag.prototype, 'upper');
MetadataTag.prototype.key = util.generatePrimitiveAccessor('obj', 'key');
MetadataTag.prototype.value = util.generatePrimitiveAccessor('obj', 'value');

module.exports = MetadataTag;
