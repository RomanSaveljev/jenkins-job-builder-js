"use strict";

var util = require('../../../util.js');

var CheckContent = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CheckContent.prototype, 'upper');
CheckContent.prototype.simple = util.generatePrimitiveAccessor('obj', 'simple');
CheckContent.prototype.json = util.generatePrimitiveAccessor('obj', 'json');
CheckContent.prototype.text = util.generatePrimitiveAccessor('obj', 'text');
CheckContent.prototype.xml = util.generatePrimitiveAccessor('obj', 'xml');

module.exports = CheckContent;
