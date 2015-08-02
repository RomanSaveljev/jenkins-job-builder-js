var should = require('should');
var RubyMetrics = require('../../../../lib/jobs/job/publishers/ruby-metrics.js');
var testlib = require('../../../testlib.js');
var Targets = require('../../../../lib/jobs/job/publishers/ruby-metrics/targets.js');

describe('RubyMetrics', function() {
  describe('constructor', testlib.describeProxyConstructor(RubyMetrics));
  describe('object', testlib.describeProxyUppableAndable(RubyMetrics));
  describe('properties', testlib.describeProxyPrimitiveProperty(RubyMetrics, 'report-dir'));
  describe('properties', testlib.describeProxyCustomArrayProperty(RubyMetrics, 'targets', Targets));
});
