var should = require('should');
var FindBugs = require('../../../../lib/jobs/job/publishers/findbugs.js');
var testlib = require('../../../testlib.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/dry/thresholds.js');

describe('FindBugs', function() {
  describe('constructor', testlib.describeProxyConstructor(FindBugs));
  describe('object', testlib.describeProxyUppableAndable(FindBugs));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'rank-priority'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'include-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'exclude-files'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'can-run-on-failed'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'should-detect-modules'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'healthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'unhealthy'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'health-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'dont-compute-new'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'use-delta-values'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'use-previous-build-as-reference'));
  describe('properties', testlib.describeProxyPrimitiveProperty(FindBugs, 'use-stable-build-as-reference'));
  describe('properties', testlib.describeProxyObjectProperty(FindBugs, 'thresholds', Thresholds));
});
