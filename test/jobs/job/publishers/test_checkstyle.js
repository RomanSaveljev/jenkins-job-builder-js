var should = require('should');
var CheckStyle = require('../../../../lib/jobs/job/publishers/checkstyle.js');
var testlib = require('../../../testlib.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/dry/thresholds.js');

describe('CheckStyle', function() {
  describe('constructor', testlib.describeProxyConstructor(CheckStyle));
  describe('object', testlib.describeProxyUppableAndable(CheckStyle));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'can-run-on-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'should-detect-modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'healthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'unhealthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'health-threshold'));
  describe('properties', testlib.describeProxyObjectProperty(CheckStyle, 'thresholds', Thresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'default-encoding'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'do-not-resolve-relative-paths'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'dont-compute-new'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'use-stable-build-as-reference'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CheckStyle, 'use-delta-values'));
});
