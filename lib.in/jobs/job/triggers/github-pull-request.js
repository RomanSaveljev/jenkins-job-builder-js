"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(GithubPullRequest)
primitiveArray(util, GithubPullRequest, 'admin-list')
primitiveArray(util, GithubPullRequest, 'white-list')
primitiveArray(util, GithubPullRequest, 'org-list')
primitive(util, GithubPullRequest, 'allow-whitelist-orgs-as-admins')
primitive(util, GithubPullRequest, 'cron')
primitive(util, GithubPullRequest, 'trigger-phrase')
primitive(util, GithubPullRequest, 'only-trigger-phrase')
primitive(util, GithubPullRequest, 'github-hooks')
primitive(util, GithubPullRequest, 'permit-all')
primitive(util, GithubPullRequest, 'auto-close-on-fail')
primitiveArray(util, GithubPullRequest, 'white-list-target-branches')
