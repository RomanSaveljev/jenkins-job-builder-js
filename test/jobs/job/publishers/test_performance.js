var should = require('should');
var Performance = require('../../../../lib/jobs/job/publishers/performance.js');
var testlib = require('../../../testlib.js');
var Report = require('../../../../lib/jobs/job/publishers/performance/report.js');

describe('Performance', function() {
  describe('constructor', testlib.describeProxyConstructor(Performance));
  describe('object', testlib.describeProxyUppableAndable(Performance));
  describe('properties', testlib.describeProxyPrimitiveProperty(Performance, 'failed-threshold'));
  describe('properties', testlib.describeProxyPrimitiveProperty(Performance, 'unstable-threshold'));
  describe('properties', testlib.describeProxyObjectArrayProperty(Performance, 'report', Report));
});
