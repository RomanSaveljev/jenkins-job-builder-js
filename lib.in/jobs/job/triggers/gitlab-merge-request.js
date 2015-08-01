"use strict";

var util = require('../../../misc/util.js');

var GitlabMergeRequest = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(GitlabMergeRequest.prototype, 'upper');
GitlabMergeRequest.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');
GitlabMergeRequest.prototype.projectPath = util.generatePrimitiveAccessor('obj', 'project-path');

module.exports = GitlabMergeRequest;
