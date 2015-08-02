var should = require('should');
var Thresholds = require('../../../../../lib/jobs/job/publishers/dry/thresholds.js');
var testlib = require('../../../../testlib.js');
var Threshold = require('../../../../../lib/jobs/job/publishers/dry/threshold.js');

describe('Thresholds', function() {
  describe('constructor', testlib.describeProxyConstructor(Thresholds));
  describe('object', testlib.describeProxyUppableAndable(Thresholds));
  describe('properties', testlib.describeProxyObjectProperty(Thresholds, 'unstable', Threshold));
  describe('properties', testlib.describeProxyObjectProperty(Thresholds, 'failed', Threshold));
});
