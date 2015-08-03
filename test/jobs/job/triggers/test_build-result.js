var should = require('should');
var BuildResult = require('../../../../lib/jobs/job/triggers/build-result.js');
var testlib = require('../../../testlib.js');
var Group = require('../../../../lib/jobs/job/triggers/build-result/group.js');

describe('BuildResult', function() {
  describe('constructor', testlib.describeProxyConstructor(BuildResult));
  describe('object', testlib.describeProxyUppableAndable(BuildResult));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildResult, 'combine'));
  describe('properties', testlib.describeProxyPrimitiveProperty(BuildResult, 'cron'));
  describe('properties', testlib.describeProxyObjectArrayProperty(BuildResult, 'groups', Group));
});
