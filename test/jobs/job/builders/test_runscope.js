var should = require('should');
var Runscope = require('../../../../lib/jobs/job/builders/runscope.js');
var testlib = require('../../../testlib.js');

describe('Runscope', function() {
  describe('constructor', testlib.describeProxyConstructor(Runscope));
  describe('object', testlib.describeProxyUppableAndable(Runscope));
  describe('properties', testlib.describeProxyPrimitiveProperty(Runscope, 'test-trigger-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Runscope, 'access-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Runscope, 'timeout'));
});
