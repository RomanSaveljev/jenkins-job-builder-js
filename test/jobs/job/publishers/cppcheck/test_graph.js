var should = require('should');
var Graph = require('../../../../../lib/jobs/job/publishers/cppcheck/graph.js');
var testlib = require('../../../../testlib.js');
var Display = require('../../../../../lib/jobs/job/publishers/cppcheck/graph/display.js');


describe('Graph', function() {
  describe('constructor', testlib.describeProxyConstructor(Graph));
  describe('object', testlib.describeProxyUppableAndable(Graph));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(Graph, 'xysize'));
  describe('properties', testlib.describeProxyObjectProperty(Graph, 'display', Display));
});
