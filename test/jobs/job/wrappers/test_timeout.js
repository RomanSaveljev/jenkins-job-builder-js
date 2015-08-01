var should = require('should');
var Timeout = require('../../../../lib/jobs/job/wrappers/timeout.js');
var testlib = require('../../../testlib.js');

describe('Timeout', function() {
  describe('constructor', testlib.describeProxyConstructor(Timeout));
  describe('object', testlib.describeProxyUppableAndable(Timeout));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'fail'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'abort'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'write-description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'timeout'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'timeout-var'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'type'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'elastic-percentage'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'elastic-number-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Timeout, 'elastic-default-timeout'));
});
