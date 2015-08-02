var should = require('should');
var Thresholds = require('../../../../../lib/jobs/job/publishers/cppcheck/thresholds.js');
var testlib = require('../../../../testlib.js');
var Severity = require('../../../../../lib/jobs/job/publishers/cppcheck/thresholds/severity.js');


describe('Thresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(Thresholds));
  describe('object', testlib.describeProxyUppableAndable(Thresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Thresholds, 'unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Thresholds, 'new-unstable'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Thresholds, 'failure'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Thresholds, 'new-failure'));
  describe('properties', testlib.describeProxyObjectProperty(Thresholds, 'severity', Severity));
});
