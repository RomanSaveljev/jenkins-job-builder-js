var should = require('should');
var AggregateTests = require('../../../../lib/jobs/job/publishers/aggregate-tests.js');
var testlib = require('../../../testlib.js');

describe('AggregateTests', function() {
  describe('constructor', testlib.describeProxyConstructor(AggregateTests));
  describe('object', testlib.describeProxyUppableAndable(AggregateTests));
  describe('properties', testlib.describeProxyPrimitiveProperty(AggregateTests, 'include-failed-builds'));
});
