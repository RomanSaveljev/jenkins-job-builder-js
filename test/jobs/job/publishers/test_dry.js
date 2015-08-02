var should = require('should');
var Dry = require('../../../../lib/jobs/job/publishers/dry.js');
var testlib = require('../../../testlib.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/dry/thresholds.js');

describe('Dry', function() {
  describe('constructor', testlib.describeProxyConstructor(Dry));
  describe('object', testlib.describeProxyUppableAndable(Dry));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'can-run-on-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'should-detect-modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'healthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'unhealthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'health-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'high-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'normal-threshold'));
  describe('properties', testlib.describeProxyObjectProperty(Dry, 'thresholds', Thresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'default-encoding'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'do-not-resolve-relative-paths'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'dont-compute-new'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'use-stable-build-as-reference'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Dry, 'use-delta-values'));
});
