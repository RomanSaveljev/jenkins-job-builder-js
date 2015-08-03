var should = require('should');
var GithubPullRequest = require('../../../../lib/jobs/job/triggers/github-pull-request.js');
var testlib = require('../../../testlib.js');

describe('GithubPullRequest', function() {
  describe('constructor', testlib.describeProxyConstructor(GithubPullRequest));
  describe('object', testlib.describeProxyUppableAndable(GithubPullRequest));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(GithubPullRequest, 'admin-list'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(GithubPullRequest, 'white-list'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(GithubPullRequest, 'org-list'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'allow-whitelist-orgs-as-admins'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'cron'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'trigger-phrase'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'only-trigger-phrase'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'github-hooks'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'permit-all'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GithubPullRequest, 'auto-close-on-fail'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(GithubPullRequest, 'white-list-target-branches'));
});
