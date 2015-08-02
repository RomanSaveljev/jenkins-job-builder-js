var should = require('should');
var Valgrind = require('../../../../lib/jobs/job/publishers/valgrind.js');
var testlib = require('../../../testlib.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/valgrind/thresholds.js');

describe('Valgrind', function() {
  describe('constructor', testlib.describeProxyConstructor(Valgrind));
  describe('object', testlib.describeProxyUppableAndable(Valgrind));
  describe('properties', testlib.describeProxyPrimitiveProperty(Valgrind, 'pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Valgrind, 'fail-no-reports'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Valgrind, 'fail-invalid-reports'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Valgrind, 'publish-if-aborted'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Valgrind, 'publish-if-failed'));
  describe('properties', testlib.describeProxyObjectProperty(Valgrind, 'thresholds', Thresholds));
});
