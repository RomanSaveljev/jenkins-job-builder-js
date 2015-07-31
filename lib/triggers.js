"use strict";

var util = require('./util.js');
var BuildResult = require('./triggers/build-result.js');
var Gerrit = require('./triggers/gerrit.js');
var Github = require('./proxies/empty-proxy.js');
var GithubPullRequest = require('./triggers/github-pull-request.js');

var Triggers = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Triggers.prototype, 'upper');
Triggers.prototype.buildResult = util.generateKeyedObjectElementAccessor('array', 'build-result', BuildResult);
Triggers.prototype.gerrit = util.generateKeyedObjectElementAccessor('array', 'gerrit', Gerrit);
Triggers.prototype.github = util.generateKeyedObjectElementAccessor('array', 'github', Github);
Triggers.prototype.githubPullRequest = util.generateKeyedObjectElementAccessor('array', 'github-pull-request', GithubPullRequest);

module.exports = Triggers;
