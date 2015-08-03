var should = require('should');
var JoinTrigger = require('../../../../lib/jobs/job/publishers/join-trigger.js');
var testlib = require('../../../testlib.js');

describe('JoinTrigger', function() {
  describe('constructor', testlib.describeProxyConstructor(JoinTrigger));
  describe('object', testlib.describeProxyUppableAndable(JoinTrigger));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(JoinTrigger, 'projects'));
});
