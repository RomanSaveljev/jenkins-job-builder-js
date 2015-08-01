"use strict";

var util = require('../../../../../misc/util.js');

var CommentAddedEvent = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CommentAddedEvent.prototype, 'upper');
CommentAddedEvent.prototype.approvalCategory = util.generatePrimitiveAccessor('obj', 'approval-category');
CommentAddedEvent.prototype.approvalValue = util.generatePrimitiveAccessor('obj', 'approval-value');

module.exports = CommentAddedEvent;
