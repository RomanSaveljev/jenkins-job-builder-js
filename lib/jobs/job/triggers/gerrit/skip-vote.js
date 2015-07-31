"use strict";

var util = require('../../util.js');

var SkipVote = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SkipVote.prototype, 'upper');
SkipVote.prototype.successful = util.generatePrimitiveAccessor('obj', 'successful');
SkipVote.prototype.failed = util.generatePrimitiveAccessor('obj', 'failed');
SkipVote.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');
SkipVote.prototype.notbuilt = util.generatePrimitiveAccessor('obj', 'notbuilt');

module.exports = SkipVote;
