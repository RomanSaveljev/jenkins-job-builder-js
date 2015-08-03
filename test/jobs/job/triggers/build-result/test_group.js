var should = require('should');
var Group = require('../../../../../lib/jobs/job/triggers/build-result/group.js');
var testlib = require('../../../../testlib.js');

describe('Group', function() {
  describe('constructor', testlib.describeProxyConstructor(Group));
  describe('object', testlib.describeProxyUppableAndable(Group));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Group, 'jobs'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Group, 'results'));
});
