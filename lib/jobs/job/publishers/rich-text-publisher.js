"use strict";

var util = require('../../../misc/util.js');

var RichTextPublisher = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(RichTextPublisher.prototype, 'upper');
RichTextPublisher.prototype.stableText = util.generatePrimitiveAccessor('obj', 'stable-text');
RichTextPublisher.prototype.unstableText = util.generatePrimitiveAccessor('obj', 'unstable-text');
RichTextPublisher.prototype.failedText = util.generatePrimitiveAccessor('obj', 'failed-text');
RichTextPublisher.prototype.parserName = util.generatePrimitiveAccessor('obj', 'parser-name');

module.exports = RichTextPublisher;
