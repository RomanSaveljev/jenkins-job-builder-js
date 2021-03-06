var should = require('should');
var Target = require('../../../../../lib/jobs/job/publishers/ruby-metrics/target.js');
var testlib = require('../../../../testlib.js');

describe('Target', function() {
  describe('constructor', testlib.describeProxyConstructor(Target));
  describe('object', testlib.describeProxyUppableAndable(Target));
  describe('properties', testlib.describeProxyPrimitiveProperty(Target, 'healthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Target, 'unhealthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Target, 'unstable'));
});
