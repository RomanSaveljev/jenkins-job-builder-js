var should = require('should');
var Thresholds = require('../../../../../lib/jobs/job/publishers/xunit/thresholds.js');
var testlib = require('../../../../testlib.js');
var Threshold = require('../../../../../lib/jobs/job/publishers/xunit/threshold.js');

describe('Thresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(Thresholds));
  describe('object', testlib.describeProxyUppableAndable(Thresholds));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Thresholds, 'failed', Threshold));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Thresholds, 'skipped', Threshold));
});
