var should = require('should');
var PostTasks = require('../../../../lib/jobs/job/publishers/post-tasks.js');
var testlib = require('../../../testlib.js');
var Match = require('../../../../lib/jobs/job/publishers/post-tasks/match.js');

describe('PostTasks', function() {
  describe('constructor', testlib.describeProxyConstructor(PostTasks));
  describe('object', testlib.describeProxyUppableAndable(PostTasks));
  describe('properties', testlib.describeProxyObjectArrayProperty(PostTasks, 'matches', Match));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostTasks, 'escalate-status'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostTasks, 'run-if-job-successful'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PostTasks, 'script'));
});
