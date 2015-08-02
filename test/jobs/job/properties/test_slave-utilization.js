var should = require('should');
var SlaveUtilization = require('../../../../lib/jobs/job/properties/slave-utilization.js');
var testlib = require('../../../testlib.js');

describe('SlaveUtilization', function() {
  describe('constructor', testlib.describeProxyConstructor(SlaveUtilization));
  describe('object', testlib.describeProxyUppableAndable(SlaveUtilization));
  describe('properties', testlib.describeProxyPrimitiveProperty(SlaveUtilization, 'slave-percentage'));
  describe('properties', testlib.describeProxyPrimitiveProperty(SlaveUtilization, 'single-instance-per-slave'));
});
