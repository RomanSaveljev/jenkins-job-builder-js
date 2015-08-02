var should = require('should');
var MetricTargets = require('../../../../../lib/jobs/job/publishers/cloverphp/metric-targets.js');
var testlib = require('../../../../testlib.js');
var MetricTarget = require('../../../../../lib/jobs/job/publishers/cloverphp/metric-target.js');

describe('MetricTargets', function() {
  describe('constructor', testlib.describeProxyConstructor(MetricTargets));
  describe('object', testlib.describeProxyUppableAndable(MetricTargets));
  describe('properties', testlib.describeProxyKeyedObjectProperty(MetricTargets, 'healthy', MetricTarget));
  describe('properties', testlib.describeProxyKeyedObjectProperty(MetricTargets, 'unhealthy', MetricTarget));
  describe('properties', testlib.describeProxyKeyedObjectProperty(MetricTargets, 'failing', MetricTarget));
});
