var should = require('should');
var Threshold = require('../../../../../lib/jobs/job/publishers/valgrind/threshold.js');
var testlib = require('../../../../testlib.js');

describe('Threshold', function() {
  describe('constructor', testlib.describeProxyConstructor(Threshold));
  describe('object', testlib.describeProxyUppableAndable(Threshold));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'invalid-read-write'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'definitely-lost'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Threshold, 'total'));
});
