var should = require('should');
var CppCheck = require('../../../../lib/jobs/job/publishers/cppcheck.js');
var testlib = require('../../../testlib.js');
var Graph = require('../../../../lib/jobs/job/publishers/cppcheck/graph.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/cppcheck/thresholds.js');

describe('CppCheck', function() {
  describe('constructor', testlib.describeProxyConstructor(CppCheck));
  describe('object', testlib.describeProxyUppableAndable(CppCheck));
  describe('properties', testlib.describeProxyPrimitiveProperty(CppCheck, 'pattern'));
  describe('properties', testlib.describeProxyObjectProperty(CppCheck, 'thresholds', Thresholds));
  describe('properties', testlib.describeProxyObjectProperty(CppCheck, 'graph', Graph));
});
