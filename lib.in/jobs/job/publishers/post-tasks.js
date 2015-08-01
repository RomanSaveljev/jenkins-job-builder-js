"use strict";

var util = require('../../../misc/util.js');
var Match = require('./post-tasks/match.js');

var PostTasks = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PostTasks.prototype, 'upper');
PostTasks.prototype.matches = util.generateObjectArrayAccessor('obj', 'matches', Match);
PostTasks.prototype.escalateStatus = util.generatePrimitiveAccessor('obj', 'escalate-status');
PostTasks.prototype.runIfJobSuccessful = util.generatePrimitiveAccessor('obj', 'escalate-status');
PostTasks.prototype.script = util.generatePrimitiveAccessor('obj', 'script');

module.exports = PostTasks;
