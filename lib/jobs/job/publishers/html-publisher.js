"use strict";

var util = require('../util.js');

var HtmlPublisher = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(HtmlPublisher.prototype, 'upper');
HtmlPublisher.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
HtmlPublisher.prototype.dir = util.generatePrimitiveAccessor('obj', 'dir');
HtmlPublisher.prototype.files = util.generatePrimitiveAccessor('obj', 'files');
HtmlPublisher.prototype.keepAll = util.generatePrimitiveAccessor('obj', 'keep-all');
HtmlPublisher.prototype.allowMissing = util.generatePrimitiveAccessor('obj', 'allow-missing');

module.exports = HtmlPublisher;
