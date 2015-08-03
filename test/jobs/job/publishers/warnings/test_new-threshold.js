var should = require('should');
var NewThreshold = require('../../../../../lib/jobs/job/publishers/warnings/new-threshold.js');
var testlib = require('../../../../testlib.js');

describe('NewThreshold', function() {
  describe('constructor', testlib.describeProxyConstructor(NewThreshold));
  describe('object', testlib.describeProxyUppableAndable(NewThreshold));
  describe('properties', testlib.describeProxyPrimitiveProperty(NewThreshold, 'new-all'));
  describe('properties', testlib.describeProxyPrimitiveProperty(NewThreshold, 'new-high'));
  describe('properties', testlib.describeProxyPrimitiveProperty(NewThreshold, 'new-normal'));
  describe('properties', testlib.describeProxyPrimitiveProperty(NewThreshold, 'new-low'));
});
