"use strict";

var util = require('../../../../misc/util.js');

var Series = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Series.prototype, 'upper');
Series.prototype.file = util.generatePrimitiveAccessor('obj', 'file');
Series.prototype.inclusionFlag = util.generatePrimitiveAccessor('obj', 'inclusion-flag');
Series.prototype.exclude = util.generatePrimitiveAccessor('obj', 'exclude');
Series.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Series.prototype.displayTable = util.generatePrimitiveAccessor('obj', 'display-table');
Series.prototype.label = util.generatePrimitiveAccessor('obj', 'label');
Series.prototype.format = util.generatePrimitiveAccessor('obj', 'format');
Series.prototype.xpathType = util.generatePrimitiveAccessor('obj', 'xpath-type');
Series.prototype.xpath = util.generatePrimitiveAccessor('obj', 'xpath');

module.exports = Series;
