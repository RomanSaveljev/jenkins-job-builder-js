var should = require('should');
var Severity = require('../../../../../../lib/jobs/job/publishers/cppcheck/thresholds/severity.js');
var testlib = require('../../../../../testlib.js');

describe('Severity', function() {
  describe('constructor', testlib.describeProxyConstructor(Severity));
  describe('object', testlib.describeProxyUppableAndable(Severity));
  describe('properties', testlib.describeProxyPrimitiveProperty(Severity, 'error'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Severity, 'warning'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Severity, 'information'));
});
