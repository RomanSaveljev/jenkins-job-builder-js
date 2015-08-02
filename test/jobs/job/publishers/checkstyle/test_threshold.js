var should = require('should');
var Threshold = require('../../../../../lib/jobs/job/publishers/checkstyle/threshold.js');
var testlib = require('../../../../testlib.js');

describe('Threshold', function() {
  describe('constructor', testlib.describeProxyConstructor(Threshold));
  describe('object', testlib.describeProxyUppableAndable(Threshold));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'total-all'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'total-high'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'total-normal'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'total-low'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'new-all'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'new-high'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'new-normal'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'new-low'));
});
