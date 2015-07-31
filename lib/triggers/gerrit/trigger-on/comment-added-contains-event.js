"use strict";

var util = require('../../../util.js');

var CommentAddedContainsEvent = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CommentAddedContainsEvent.prototype, 'upper');
CommentAddedContainsEvent.prototype.commentContainsValue = util.generatePrimitiveAccessor('obj', 'comment-contains-value');

module.exports = CommentAddedContainsEvent;
