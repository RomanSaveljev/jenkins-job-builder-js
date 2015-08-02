var should = require('should');
var MetricTarget = require('../../../../../lib/jobs/job/publishers/cloverphp/metric-target.js');
var testlib = require('../../../../testlib.js');

describe('MetricTarget', function() {
  describe('constructor', testlib.describeProxyConstructor(MetricTarget));
  describe('object', testlib.describeProxyUppableAndable(MetricTarget));
  describe('properties', testlib.describeProxyPrimitiveProperty(MetricTarget, 'method'));
  describe('properties', testlib.describeProxyPrimitiveProperty(MetricTarget, 'statement'));
});
