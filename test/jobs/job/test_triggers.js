var should = require('should');
var Triggers = require('../../../lib/jobs/job/triggers.js');
var testlib = require('../../testlib.js');
var BuildResult = require('../../../lib/jobs/job/triggers/build-result.js');
var Gerrit = require('../../../lib/jobs/job/triggers/gerrit.js');
var EmptyProxy = require('../../../lib/misc/empty-proxy.js');
var GithubPullRequest = require('../../../lib/jobs/job/triggers/github-pull-request.js');
var GitlabMergeRequest = require('../../../lib/jobs/job/triggers/gitlab-merge-request.js');
var PollUrl = require('../../../lib/jobs/job/triggers/pollurl.js');
var Reverse = require('../../../lib/jobs/job/triggers/reverse.js');
var Script = require('../../../lib/jobs/job/triggers/script.js');

describe('Triggers', function() {
  describe('constructor', testlib.describeProxyConstructor(Triggers));
  describe('object', testlib.describeProxyUppableAndable(Triggers));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'build-result', BuildResult));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'gerrit', Gerrit));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'github', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'github-pull-request', GithubPullRequest));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'gitlab-merge-request', GitlabMergeRequest));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Triggers, 'pollscm'));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'pollurl', PollUrl));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'reverse', Reverse));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Triggers, 'script', Script));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Triggers, 'timed'));
});
