var should = require('should');
var Xunit = require('../../../../lib/jobs/job/publishers/xunit.js');
var testlib = require('../../../testlib.js');
var Thresholds = require('../../../../lib/jobs/job/publishers/xunit/thresholds.js');
var Types = require('../../../../lib/jobs/job/publishers/xunit/types.js');

describe('Xunit', function() {
  describe('constructor', testlib.describeProxyConstructor(Xunit));
  describe('object', testlib.describeProxyUppableAndable(Xunit));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xunit, 'thresholdmode'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Xunit, 'thresholds', Thresholds));
  describe('properties', testlib.describeProxyPrimitiveProperty(Xunit, 'test-time-margin'));
  describe('properties', testlib.describeProxyCustomArrayProperty(Xunit, 'types', Types));
});
