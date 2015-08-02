var should = require('should');
var TriggerRemote = require('../../../../lib/jobs/job/builders/trigger-remote.js');
var testlib = require('../../../testlib.js');

describe('TriggerRemote', function() {
  describe('constructor', testlib.describeProxyConstructor(TriggerRemote));
  describe('object', testlib.describeProxyUppableAndable(TriggerRemote));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'remote-jenkins-name'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'job'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'should-not-fail-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'prevent-remote-build-queue'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'block'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'poll-interval'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'connection-retry-limit'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'predefined-parameters'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TriggerRemote, 'property-file'));
});
