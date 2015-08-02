var should = require('should');
var Report = require('../../../../../lib/jobs/job/publishers/performance/report.js');
var testlib = require('../../../../testlib.js');

describe('Report', function() {
  describe('constructor', testlib.describeProxyConstructor(Report));
  describe('object', testlib.describeProxyUppableAndable(Report));
  describe('properties', testlib.describeProxyPrimitiveProperty(Report, 'jmeter'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Report, 'junit'));
});
