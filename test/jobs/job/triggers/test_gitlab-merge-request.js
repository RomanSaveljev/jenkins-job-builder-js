var should = require('should');
var GitlabMergeRequest = require('../../../../lib/jobs/job/triggers/gitlab-merge-request.js');
var testlib = require('../../../testlib.js');
var Group = require('../../../../lib/jobs/job/triggers/build-result/group.js');

describe('GitlabMergeRequest', function() {
  describe('constructor', testlib.describeProxyConstructor(GitlabMergeRequest));
  describe('object', testlib.describeProxyUppableAndable(GitlabMergeRequest));
  describe('properties', testlib.describeProxyPrimitiveProperty(GitlabMergeRequest, 'project-path'));
  describe('properties', testlib.describeProxyPrimitiveProperty(GitlabMergeRequest, 'cron'));
});
