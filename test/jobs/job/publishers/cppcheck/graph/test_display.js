var should = require('should');
var Display = require('../../../../../../lib/jobs/job/publishers/cppcheck/graph/display.js');
var testlib = require('../../../../../testlib.js');

describe('Display', function() {
  describe('constructor', testlib.describeProxyConstructor(Display));
  describe('object', testlib.describeProxyUppableAndable(Display));
  describe('properties', testlib.describeProxyPrimitiveProperty(Display, 'sum'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Display, 'error'));
});
