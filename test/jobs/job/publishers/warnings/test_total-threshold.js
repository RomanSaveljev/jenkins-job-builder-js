var should = require('should');
var TotalThreshold = require('../../../../../lib/jobs/job/publishers/warnings/total-threshold.js');
var testlib = require('../../../../testlib.js');

describe('TotalThreshold', function() {
  describe('constructor', testlib.describeProxyConstructor(TotalThreshold));
  describe('object', testlib.describeProxyUppableAndable(TotalThreshold));
  describe('properties', testlib.describeProxyPrimitiveProperty(TotalThreshold, 'total-all'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TotalThreshold, 'total-high'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TotalThreshold, 'total-normal'));
  describe('properties', testlib.describeProxyPrimitiveProperty(TotalThreshold, 'total-low'));
});
