"use strict";

var util = require('../../misc/util.js');
var BuildResult = require('./triggers/build-result.js');
var Gerrit = require('./triggers/gerrit.js');
var Github = require('../../misc/empty-proxy.js');
var GithubPullRequest = require('./triggers/github-pull-request.js');
var GitlabMergeRequest = require('./triggers/gitlab-merge-request.js');
var PollUrl = require('./triggers/pollurl.js');
var Reverse = require('./triggers/reverse.js');
var Script = require('./triggers/script.js');
var Gitlab = require('./triggers/gitlab.js');
var Bitbucket = require('../../misc/empty-proxy.js');
var MonitorFolders = require('./triggers/monitor-folders.js');
var MonitorFiles = require('./triggers/monitor-files.js');

uppableArrayProxy(Triggers)
keyedObjectElement(util, Triggers, 'build-result', BuildResult)
keyedObjectElement(util, Triggers, 'gerrit', Gerrit)
keyedObjectElement(util, Triggers, 'github', Github)
keyedObjectElement(util, Triggers, 'github-pull-request', GithubPullRequest)
keyedObjectElement(util, Triggers, 'gitlab-merge-request', GitlabMergeRequest)
keyedPrimitiveElement(util, Triggers, 'pollscm')
keyedObjectElement(util, Triggers, 'pollurl', PollUrl)
keyedObjectElement(util, Triggers, 'reverse', Reverse)
keyedObjectElement(util, Triggers, 'script', Script)
keyedPrimitiveElement(util, Triggers, 'timed')
keyedObjectElement(util, Triggers, 'gitlab', Gitlab)
keyedObjectElement(util, Triggers, 'bitbucket', Bitbucket)
keyedObjectElement(util, Triggers, 'monitor-folders', MonitorFolders)
keyedObjectElement(util, Triggers, 'monitor-files', MonitorFiles)
