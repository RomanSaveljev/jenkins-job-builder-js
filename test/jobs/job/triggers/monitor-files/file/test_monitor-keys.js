var should = require('should');
var MonitorKeys = require('../../../../../../lib/jobs/job/triggers/monitor-files/file/monitor-keys.js');
var testlib = require('../../../../../testlib.js');

describe('MonitorKeys', function() {
  describe('constructor', testlib.describeProxyConstructor(MonitorKeys));
  describe('object', testlib.describeProxyUppableAndable(MonitorKeys));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(MonitorKeys, 'keys'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MonitorKeys, 'all-keys'));
});
