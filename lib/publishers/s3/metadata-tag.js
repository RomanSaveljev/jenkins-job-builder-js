"use strict";

var util = require('../../util.js');

var MetadataTag = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MetadataTag.prototype, 'upper');
MetadataTag.prototype.key = util.generatePrimtiveAccessor('obj', 'key');
MetadataTag.prototype.value = util.generatePrimtiveAccessor('obj', 'value');

module.exports = MetadataTag;
