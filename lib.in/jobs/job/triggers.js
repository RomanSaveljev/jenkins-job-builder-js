"use strict";

var util = require('../../misc/util.js');
var BuildResult = require('./triggers/build-result.js');
var Gerrit = require('./triggers/gerrit.js');
var Github = require('../../misc/empty-proxy.js');
var GithubPullRequest = require('./triggers/github-pull-request.js');
var GitlabMergeRequest = require('./triggers/gitlab-merge-request.js');
var GroovyScript = require('./triggers/groovy-script.js');
var Ivy = require('./triggers/ivy.js');
var PollUrl = require('./triggers/pollurl.js');
var Reverse = require('./triggers/reverse.js');
var Script = require('./triggers/script.js');

uppableArrayProxy(Triggers)
keyedObjectElement(util, Triggers, 'build-result', BuildResult)
keyedObjectElement(util, Triggers, 'gerrit', Gerrit)
keyedObjectElement(util, Triggers, 'github', Github)
keyedObjectElement(util, Triggers, 'github-pull-request', GithubPullRequest)
keyedObjectElement(util, Triggers, 'gitlab-merge-request', GitlabMergeRequest)
keyedObjectElement(util, Triggers, 'groovy-script', GroovyScript)
keyedObjectElement(util, Triggers, 'ivy', Ivy)
keyedPrimitiveElement(util, Triggers, 'pollscm')
keyedObjectElement(util, Triggers, 'pollurl', PollUrl)
keyedObjectElement(util, Triggers, 'reverse', Reverse)
keyedObjectElement(util, Triggers, 'script', Script)
keyedPrimitiveElement(util, Triggers, 'timed')
