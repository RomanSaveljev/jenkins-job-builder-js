var should = require('should');
var Naginator = require('../../../../lib/jobs/job/publishers/naginator.js');
var testlib = require('../../../testlib.js');
var Html = require('../../../../lib/jobs/job/publishers/cloverphp/html.js');
var MetricTargets = require('../../../../lib/jobs/job/publishers/cloverphp/metric-targets.js');

describe('Naginator', function() {
  describe('constructor', testlib.describeProxyConstructor(Naginator));
  describe('object', testlib.describeProxyUppableAndable(Naginator));
  describe('properties', testlib.describeProxyPrimitiveProperty(Naginator, 'rerun-unstable-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Naginator, 'fixed-delay'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Naginator, 'progressive-delay-increment'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Naginator, 'progressive-delay-maximum'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Naginator, 'max-failed-builds'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Naginator, 'regular-expression'));
});
