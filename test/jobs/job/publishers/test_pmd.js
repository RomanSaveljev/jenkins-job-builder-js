var should = require('should');
var Pmd = require('../../../../lib/jobs/job/publishers/pmd.js');
var testlib = require('../../../testlib.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/dry/thresholds.js');

describe('Pmd', function() {
  describe('constructor', testlib.describeProxyConstructor(Pmd));
  describe('object', testlib.describeProxyUppableAndable(Pmd));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'can-run-on-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'should-detect-modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'healthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'unhealthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'health-threshold'));
  describe('properties', testlib.describeProxyObjectProperty(Pmd, 'thresholds', Thresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'default-encoding'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'do-not-resolve-relative-paths'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'dont-compute-new'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'use-stable-build-as-reference'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Pmd, 'use-delta-values'));
});
