"use strict";

var util = require('../../util.js');

var Series = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Series.prototype, 'upper');
Series.prototype.file = util.generatePrimtiveAccessor('obj', 'file');
Series.prototype.inclusionFlag = util.generatePrimtiveAccessor('obj', 'inclusion-flag');
Series.prototype.exclude = util.generatePrimtiveAccessor('obj', 'exclude');
Series.prototype.url = util.generatePrimtiveAccessor('obj', 'url');
Series.prototype.displayTable = util.generatePrimtiveAccessor('obj', 'display-table');
Series.prototype.label = util.generatePrimtiveAccessor('obj', 'label');
Series.prototype.format = util.generatePrimtiveAccessor('obj', 'format');
Series.prototype.xpathType = util.generatePrimtiveAccessor('obj', 'xpath-type');
Series.prototype.xpath = util.generatePrimtiveAccessor('obj', 'xpath');

module.exports = Series;
