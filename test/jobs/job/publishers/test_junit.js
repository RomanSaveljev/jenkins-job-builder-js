var should = require('should');
var Junit = require('../../../../lib/jobs/job/publishers/junit.js');
var testlib = require('../../../testlib.js');
var Html = require('../../../../lib/jobs/job/publishers/cloverphp/html.js');
var MetricTargets = require('../../../../lib/jobs/job/publishers/cloverphp/metric-targets.js');

describe('Junit', function() {
  describe('constructor', testlib.describeProxyConstructor(Junit));
  describe('object', testlib.describeProxyUppableAndable(Junit));
  describe('properties', testlib.describeProxyPrimitiveProperty(Junit, 'results'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Junit, 'keep-long-stdio'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Junit, 'test-stability'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Junit, 'claim-build'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Junit, 'measurement-plots'));
});
