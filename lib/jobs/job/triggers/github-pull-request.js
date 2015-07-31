"use strict";

var util = require('../../../misc/util.js');

var GithubPullRequest = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(GithubPullRequest.prototype, 'upper');
GithubPullRequest.prototype.adminList = util.generatePrimitiveArrayAccessor('obj', 'admin-list');
GithubPullRequest.prototype.whiteList = util.generatePrimitiveArrayAccessor('obj', 'white-list');
GithubPullRequest.prototype.orgList = util.generatePrimitiveArrayAccessor('obj', 'org-list');
GithubPullRequest.prototype.allowWhitelistOrgsAsAdmins = util.generatePrimitiveAccessor('obj', 'allow-whitelist-orgs-as-admins');
GithubPullRequest.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');
GithubPullRequest.prototype.triggerPhrase = util.generatePrimitiveAccessor('obj', 'trigger-phrase');
GithubPullRequest.prototype.onlyTriggerPhrase = util.generatePrimitiveAccessor('obj', 'only-trigger-phrase');
GithubPullRequest.prototype.githubHooks = util.generatePrimitiveAccessor('obj', 'github-hooks');
GithubPullRequest.prototype.permitAll = util.generatePrimitiveAccessor('obj', 'permit-all');
GithubPullRequest.prototype.autoCloseOnFail = util.generatePrimitiveAccessor('obj', 'auto-close-on-fail');
GithubPullRequest.prototype.whiteListTargetBranches = util.generatePrimitiveArrayAccessor('obj', 'white-list-target-branches');

module.exports = GithubPullRequest;
