var should = require('should');
var TestNg = require('../../../../lib/jobs/job/publishers/testng.js');
var testlib = require('../../../testlib.js');

describe('TestNg', function() {
  describe('constructor', testlib.describeProxyConstructor(TestNg));
  describe('object', testlib.describeProxyUppableAndable(TestNg));
  describe('properties', testlib.describeProxyPrimitiveProperty(TestNg, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TestNg, 'escape-test-description'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TestNg, 'escape-exception-msg'));
});
