"use strict";

var util = require('./util.js');
var BuildResult = require('./triggers/build-result.js');
var Gerrit = require('./triggers/gerrit.js');
var Github = require('./proxies/empty-proxy.js');
var GithubPullRequest = require('./triggers/github-pull-request.js');
var GitlabMergeRequest = require('./triggers/gitlab-merge-request.js');
var GroovyScript = require('./triggers/groovy-script.js');
var Ivy = require('./triggers/ivy.js');
var PollUrl = require('./triggers/pollurl.js');
var Reverse = require('./triggers/reverse.js');

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
Triggers.prototype.gitlabMergeRequest = util.generateKeyedObjectElementAccessor('array', 'gitlab-merge-request', GitlabMergeRequest);
Triggers.prototype.groovyScript = util.generateKeyedObjectElementAccessor('array', 'groovy-script', GroovyScript);
Triggers.prototype.ivy = util.generateKeyedObjectElementAccessor('array', 'ivy', Ivy);
Triggers.prototype.pollscm = util.generateKeyedPrimitiveElementAccessor('array', 'pollscm');
Triggers.prototype.pollurl = util.generateKeyedObjectElementAccessor('array', 'pollurl', PollUrl);
Triggers.prototype.reverse = util.generateKeyedObjectElementAccessor('array', 'reverse', Reverse);

module.exports = Triggers;
